use jnueca;
CREATE TABLE info (
  info_id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  tag_id INT,
  status int(1),
  user_id INT
);