import requests
import datetime
import time
from collections import defaultdict

def run():
  res = requests.get('https://api.github.com/repos/npm/npm/events')
  json = res.json()
  print 'len', len(json)


if __name__ == '__main__':
  run()
