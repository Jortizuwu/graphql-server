CREATE TABLE `book` (
	`book_id` varchar(50) NOT NULL,
	`content` TEXT NOT NULL,
	`uid` varchar(50),
	PRIMARY KEY (`book_id`)
);

CREATE TABLE `user` (
	`uid` varchar(50) NOT NULL,
	`nick_name` varchar(50) NOT NULL,
	`role_id` varchar(50),
	PRIMARY KEY (`uid`)
);

CREATE TABLE `role` (
	`role_id` varchar(50) NOT NULL,
	`name` varchar(50) NOT NULL,
	PRIMARY KEY (`role_id`)
);

ALTER TABLE `book` ADD CONSTRAINT `book_fk0` FOREIGN KEY (`uid`) REFERENCES `user`(`uid`);

ALTER TABLE `user` ADD CONSTRAINT `user_fk0` FOREIGN KEY (`role_id`) REFERENCES `role`(`role_id`);



