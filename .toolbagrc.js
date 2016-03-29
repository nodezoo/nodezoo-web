'use strict'

const StatsCollector = require('toolbag-plugin-stats-collector')
const UdpReporter = require('toolbag-plugin-udp-reporter')

module.exports = function (defaults, callback) {
  callback(null, {
    plugins: [
      {
        plugin: UdpReporter,
        options: {
          id: 'udp reporter',
          socketType: 'udp4',
          port: 5001,
          host: 'localhost'
        }
      },
      {
        plugin: StatsCollector,
        options: {
          enabled: true,
          period: 1000,
          eventLoopLimit: 30,
          features: {
            process: true,
            system: true,
            cpu: true,
            memory: true,
            gc: false,
            handles: false,
            requests: false,
            eventLoop: true,
            meta: {
              tags: [
                'nodezoo-web'
              ]
            }
          }
        }
      }
    ]
  })
}
