SELECT
  CONCAT(repository_owner, '/', repository_name) as name,
  STRFTIME_UTC_USEC(created_at, '%Y-%m') as month,
  count(*) as stars
FROM [githubarchive:github.timeline]
WHERE type="WatchEvent"
    AND
    (
      (
            repository_name="ember.js"
        AND repository_owner="emberjs"
      )
      OR
      (
            repository_name="backbone"
        AND repository_owner="jashkenas"
      )
      OR
      (
            repository_name="react"
        AND repository_owner="facebook"
      )
      OR
      (
            repository_name="angular.js"
        AND repository_owner="angular"
      )
      OR
      (
            repository_name="meteor"
        AND repository_owner="meteor"
      )
      OR
      (
            repository_name="knockout"
        AND repository_owner="knockout"
      )
      OR
      (
            repository_name="derby"
        AND repository_owner="derbyjs"
      )
      OR
      (
            repository_name="polymer"
        AND repository_owner="Polymer"
      )
      OR
      (
            repository_name="bem-core"
        AND repository_owner="bem"
      )
    )
    AND PARSE_UTC_USEC(created_at) >= PARSE_UTC_USEC('2013-10-01 00:00:00')
GROUP BY name, month
ORDER BY name, month

