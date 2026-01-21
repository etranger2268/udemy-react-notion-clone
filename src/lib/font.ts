/*
 * Google Fonts
 * -----------------------------------------------------------------------------
 * 1. Inter        : 英数字用
 * 2. Noto Sans JP : 日本語用
 *
 * 実装の仕組み:
 * - Layout.tsxでCSS変数（--font-inter, --font-noto-sans-jp）として定義
 * - globals.cssの@theme 設定で、CSS変数を `font-sans` として合成
 * - bodyタグに `font-sans` を付与することで、サイト全体に適用
 * -----------------------------------------------------------------------------
 */

import { Inter, Noto_Sans_JP } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});
