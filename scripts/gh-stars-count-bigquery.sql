SELECT
  CONCAT(repository_owner, '/', repository_name) as name,
  STRFTIME_UTC_USEC(created_at, '%Y %m x') as month,
  max(repository_watchers) as stars
FROM [githubarchive:github.timeline]
WHERE type="WatchEvent"
    AND
    (
      (
            repository_name="backbone.marionette"
        AND repository_owner="marionettejs"
      )
      OR
      (
            repository_name="ionic"
        AND repository_owner="driftyco"
      )

      OR
      (
            repository_name="famous"
        AND repository_owner="Famous"
      )
      OR
      (
            repository_name="flight"
        AND repository_owner="flightjs"
      )
      OR
      (
            repository_name="om"
        AND repository_owner="swannodette"
      )
      OR
      (
            repository_name="flux"
        AND repository_owner="facebook"
      )
      OR
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
            repository_name="backbone"
        AND repository_owner="documentcloud"
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
        AND LOWER(repository_owner)="stevesanderson"
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
    AND PARSE_UTC_USEC(created_at) >= PARSE_UTC_USEC('2009-01-01 00:00:00')
GROUP BY name, month
ORDER BY name, month

