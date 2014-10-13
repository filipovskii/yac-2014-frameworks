import requests
import datetime
import time
from collections import defaultdict

FRAMEWORKS = [
  'angularjs',
  'knockout.js',
  'ember.js',
  'backbone.js',
  'reactjs',
  'meteor',
  'derby',
  'bem',
  'polymer',
]

DATES = [
  '2013-10-01',
  '2013-11-01',
  '2013-12-01',
  '2014-01-01',
  '2014-02-01',
  '2014-03-01',
  '2014-04-01',
  '2014-05-01',
  '2014-06-01',
  '2014-07-01',
  '2014-08-01',
  '2014-09-01',
  '2014-10-01',
]


def run():
  results = defaultdict(dict)
  session = requests.Session()

  for framework in FRAMEWORKS:
    for i in xrange(1, len(DATES)):
      date_from = DATES[i - 1]
      date_to = DATES[i]

      number_of_questions = total_questions(
          session, framework, date_from, date_to)
      results[framework][date_from] = number_of_questions

  header = 'framework'
  for i in xrange(0, len(DATES) - 1):
    header = header + ',' + DATES[i][:-3]

  print header
  for framework in results:
    f_str = framework
    for result in results[framework].values():
      f_str = f_str + ',' + str(result)

    print f_str


def from_utc_to_utime(utcTime, fmt="%Y-%m-%d"):
  # change datetime.datetime to time, return time.struct_time type
  d = datetime.datetime.strptime(utcTime, fmt)
  t = time.mktime(d.timetuple())
  return int(t)


def total_questions(session, framework, date_from_utc, date_to_utc):
  fromdate = from_utc_to_utime(date_from_utc)
  todate = from_utc_to_utime(date_to_utc)
  request_str = (
      'https://api.stackexchange.com/2.2/questions' +
      '?key=U4DMV*8nvpm3EOpvf69Rxw' +
      '((&site=stackoverflow&pagesize=0' +
      '&fromdate=' + str(fromdate) +
      '&todate=' + str(todate) +
      '&order=desc&sort=activity' +
      '&tagged=' + framework +
      '&filter=!9YdnSNNB1'
  )
  response = session.get(request_str)

  return response.json()['total']


if __name__ == '__main__':
  run()
