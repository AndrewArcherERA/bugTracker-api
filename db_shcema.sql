USE bugtrackerapi;

CREATE TABLE projects(
	p_id int NOT NULL AUTO_INCREMENT,
    p_name varchar(255) NOT NULL,
    PRIMARY KEY (p_id)
);

CREATE TABLE users(
	u_id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    PRIMARY KEY (u_id)
);

ALTER TABLE users
ADD hash_password BINARY(60);

ALTER TABLE users
ADD email varchar(255);


CREATE TABLE bugs(
	b_id int NOT NULL AUTO_INCREMENT,
    descr varchar(255) NOT NULL,
    PRIMARY KEY (b_id)
);

CREATE TABLE bug_user_mapping(
	b_id int NOT NULL,
    u_id int NOT NULL,
    PRIMARY KEY (b_id, u_id),
    foreign key (b_id) references bugs(b_id),
    foreign key (u_id) references users(u_id)
);
CREATE TABLE project_user_mapping(
	p_id int NOT NULL,
    u_id int NOT NULL,
    PRIMARY KEY (p_id, u_id),
    foreign key (p_id) references projects(p_id),
    foreign key (u_id) references users(u_id)
);
CREATE TABLE project_bug_mapping(
	p_id int NOT NULL,
    b_id int NOT NULL,
    PRIMARY KEY (p_id, b_id),
    foreign key (p_id) references projects(p_id),
    foreign key (b_id) references bugs(b_id)
);

ALTER TABLE bugs DROP constraint created_by; 
ALTER TABLE bugs DROP COLUMN p_id; 

describe bugs;

select * from information_schema.referential_constraints where constraint_schema = 'bugtrackerapi'

