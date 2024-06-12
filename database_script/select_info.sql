SELECT i.info_id, i.user_id, i.title, i.content, i.create_time, i.info_status, u.username
FROM info AS i
JOIN user AS u ON i.user_id = u.user_id
JOIN tag AS t ON i.tag_id = t.tag_id
WHERE t.tag_name = '校园杂谈'