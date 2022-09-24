import os
import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="my_db",
        user='anthony',
        password='antoine')

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('DROP TABLE IF EXISTS users;')
cur.execute('CREATE TABLE users (id serial PRIMARY KEY,'
                                 'username varchar (50) UNIQUE NOT NULL);'
                                )

# Insert data into the table

cur.execute('INSERT INTO users (username)'
            'VALUES(%s)',
            ('anteezy',)
            )

conn.commit()

cur.close()
conn.close()