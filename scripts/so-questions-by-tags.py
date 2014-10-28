import requests
import datetime
import time
from collections import defaultdict

FRAMEWORKS = [
    'jquery',
    'extjs',
    'dojo',
#  'twitter-flight',
#  'om',
#  'marionette',
#  'ampersand.js',
#  'reactjs-flux',
#  'famo.us',
#  'ionic-framework',
#  'angularjs',
#  'knockout.js',
#  'ember.js',
#  'backbone.js',
#  'reactjs',
#  'meteor',
#  'derby',
#  'bem',
#  'polymer',
]

DATES = []

for year in range(2008, 2015):
  for month in range(1, 13):
    if year == 2014 and month == 11:
      break
    DATES.append('{year}-{month:02}-01'.format(year=year, month=month))



def run():
  results = defaultdict(dict)
  session = requests.Session()

  for framework in FRAMEWORKS:
    for i in xrange(1, len(DATES)):
      date_from = DATES[i - 1]
      date_to = DATES[i]

      number_of_questions = total_questions(
          session, framework, date_from, date_to)
      results[framework][date_from + ' - ' + date_to] = number_of_questions

  print ','.join(['framework', 'date', 'questions'])
  for framework in results:
    for rng, result in results[framework].items():
      print ','.join([framework, rng, str(result)])


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
