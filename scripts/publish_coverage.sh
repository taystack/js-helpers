#!/usr/bin/env bash

echo """

  Publishing Coverage

"""
codecov --token="$CODECOV_TOKEN_JS_HELPERS"
