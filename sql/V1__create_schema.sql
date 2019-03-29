CREATE TABLE thread (
    id VARCHAR(186) PRIMARY KEY NOT NULL,
    unread_count INT DEFAULT 0,
    last_message_id VARCHAR(32)
);

CREATE TABLE message (
    id VARCHAR(32) AS (JSON_VALUE(payload, '$.id')),
    thread_id VARCHAR(186),
    to_number VARCHAR(16) AS (JSON_VALUE(payload, '$.to[0]')),
    from_number VARCHAR(16) AS (JSON_VALUE(payload, '$.from')),
    direction VARCHAR(3) AS (JSON_VALUE(payload, '$.direction')),
    time VARCHAR(21) AS (JSON_VALUE(payload, '$.time')),
    text VARCHAR(4096) AS (JSON_VALUE(payload, '$.text')),
    payload VARCHAR(4096),
    FOREIGN KEY (thread_id) REFERENCES thread(id)
);
CREATE INDEX message_to_number_ix ON message(to_number);
CREATE INDEX message_from_number_ix ON message(from_number);
CREATE INDEX message_time_ix ON message(from_number);