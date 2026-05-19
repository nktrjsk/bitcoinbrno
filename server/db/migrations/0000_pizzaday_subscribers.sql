CREATE TABLE IF NOT EXISTS `pizzaday_subscribers` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `email` text UNIQUE,
  `phone` text UNIQUE,
  `pref_lang` text NOT NULL DEFAULT 'cs',
  `created_at` text NOT NULL DEFAULT (datetime('now'))
);
