#!/bin/sh

tar -czf dev-exercise-submission.tar.gz \
--exclude='node_modules' \
--exclude='dictionary.json' \
--exclude='package-submission.sh' \
--exclude '*.tar.gz' \
--exclude '*.zip' \
--exclude='.git' \
.
