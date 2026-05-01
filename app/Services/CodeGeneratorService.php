<?php

namespace App\Services;

use Closure;

/**
 * Domain-agnostic code/tag generator.
 *
 * Format: {prefix derived from a source string}{separator}{numeric suffix}.
 * Prefix is a fixed-length, uppercased letter slice of the source — padded
 * with a fallback letter when the source is shorter than the prefix length
 * or empty. Suffix is a zero-padded random integer.
 *
 * When a uniqueness checker closure is supplied, the suffix is rerolled
 * until the produced code passes (closure returns false). A timestamp
 * suffix is used as the safety valve after maxAttempts collisions.
 *
 * Reusable for inventory asset tags, equipment SKUs, classroom codes,
 * or any short human-friendly identifier derived from a name.
 *
 * Example:
 *   $code = $gen->generate('Projector');                                 // PRO-4821
 *   $code = $gen->prefixLength(4)->suffixDigits(6)
 *               ->generate('Lab', fn ($c) => Foo::where('code', $c)->exists());
 */
class CodeGeneratorService
{
    private int $prefixLength = 3;
    private int $suffixDigits = 4;
    private string $separator = '-';
    private string $fallbackLetter = 'X';
    private int $maxAttempts = 20;

    /**
     * Set the length of the prefix.
     *
     * @param int $length
     * @return $this
     */
    public function prefixLength(int $length): static
    {
        $this->prefixLength = max(1, $length);

        return $this;
    }

    /**
     * Set the number of digits for the suffix.
     *
     * @param int $digits
     * @return $this
     */
    public function suffixDigits(int $digits): static
    {
        $this->suffixDigits = max(1, $digits);

        return $this;
    }

    /**
     * Set the separator for the code.
     *
     * @param string $separator
     * @return $this
     */
    public function separator(string $separator): static
    {
        $this->separator = $separator;

        return $this;
    }

    /**
     * Set the fallback letter for the prefix.
     *
     * @param string $letter
     * @return $this
     */
    public function fallbackLetter(string $letter): static
    {
        $this->fallbackLetter = $letter !== '' ? mb_substr($letter, 0, 1) : 'X';

        return $this;
    }

    /**
     * Set the maximum number of attempts to generate a unique code.
     *
     * @param int $attempts
     * @return $this
     */
    public function maxAttempts(int $attempts): static
    {
        $this->maxAttempts = max(1, $attempts);

        return $this;
    }

    /**
     * Generate a code. When `$existsCheck` is given, the suffix is rerolled
     * until the closure returns false for the produced code.
     *
     * @param  Closure(string): bool|null  $existsCheck
     */
    public function generate(?string $source = null, ?Closure $existsCheck = null): string
    {
        $prefix = $this->buildPrefix($source);

        if ($existsCheck === null) {
            return $prefix.$this->separator.$this->randomSuffix();
        }

        for ($i = 0; $i < $this->maxAttempts; $i++) {
            $code = $prefix.$this->separator.$this->randomSuffix();
            if (! $existsCheck($code)) {
                return $code;
            }
        }

        return $prefix.$this->separator.time();
    }

    /**
     * Build a prefix from a source string.
     *
     * @param string|null $source
     * @return string
     */
    private function buildPrefix(?string $source): string
    {
        $clean = preg_replace('/[^a-zA-Z]/', '', (string) $source);
        $prefix = strtoupper(substr($clean, 0, $this->prefixLength));

        return str_pad($prefix, $this->prefixLength, $this->fallbackLetter);
    }

    /**
     * Generate a random suffix.
     *
     * @return string
     */
    private function randomSuffix(): string
    {
        $max = (10 ** $this->suffixDigits) - 1;

        return str_pad((string) random_int(0, $max), $this->suffixDigits, '0', STR_PAD_LEFT);
    }
}
