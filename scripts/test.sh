#!/usr/bin/env bash

./node_modules/.bin/jest --coverage $1

echo """
/coverage dir generated, to publish the new test coverage run:

  \$ yarn publish-coverage

"""
