FROM mongo

COPY seed/ /seed/
COPY import.js /docker-entrypoint-initdb.d/

# RUN mongo < import.js
# RUN sh import-seed-data.sh
# COPY import-seed-data.sh /docker-entrypoint-initdb.d/