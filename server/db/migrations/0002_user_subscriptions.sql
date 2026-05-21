CREATE TABLE IF NOT EXISTS `user_subscriptions` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `user_id` integer NOT NULL REFERENCES `users`(`id`) ON DELETE CASCADE,
  `topic` text NOT NULL,
  UNIQUE(`user_id`, `topic`)
);
