// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  process.env.ENVIRONMENT || 'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'snow',

    // clients configs
    api: {
        aws: {
            region: 'us-east-1'
        },
        github: {
            token: process.env.GITHUB_API_TOKEN
        },
        jenkins: {
            baseUrl: process.env.JENKINS_URL,
            basicAuthUser: process.env.JENKINS_USER,
            basicAuthPassword: process.env.JENKINS_PASSWORD
        },
        weather: {
            token: process.env.WEATHER_API_TOKEN
        },
        json: {
            url: process.env.JSON_API_URL
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [
        // zero-th dashboard (hackathon JSON test)
        {
            columns: 2,
            rows:    2,
            widgets: [
                {
                    type: 'json.data',
                    title: 'Intel Edison Temperature Sensor',
                    value: '${0.temperature}',
                    unit:  '℃',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'json.data',
                    title: 'Intel Edison Light Sensor',
                    value: '${0.light}',
                    unit:  'Volts',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'json.data',
                    title: 'Data Point Taken',
                    value: '${0.time}',
                    unit:  '',
                    columns: 2, rows: 1,
                    x: 0, y: 1
                }
            ]
        },
        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'github.user_badge',
                    user: 'trinitronx',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'trinitronx',
                    repository: 'ansible-docker-base',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'trinitronx/ansible-docker-base',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                {
                    type: 'github.branches',
                    repository: 'trinitronx/ansible-docker-base',
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
// Broken
/*
                {
                    type: 'weather.weather',
                    token: process.env.WEATHER_API_TOKEN,
                    city: 'Denver',
                    country: 'US',
                    lang: 'en',
                    limit: 2,
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
*/
                {
                    type: 'travis.build_histogram',
                    owner: 'trinitronx',
                    repository: 'ansible-docker-base',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'travis.build_history',
                    owner: 'trinitronx',
                    repository: 'ansible-docker-base',
                    columns: 1, rows: 2,
                    x: 3, y: 1
                },
                {
                    type: 'github.status',
                    columns: 1, rows: 1,
                    x: 0, y: 2
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'trinitronx',
                    repository: 'homebrew-truecrypt',
                    columns: 2, rows: 1,
                    x: 1, y: 2
                },
            ]
        },

        // second dashboard
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                    type: 'travis.build_history',
                    owner: 'trinitronx',
                    repository: 'kodi-cookbook',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.branches',
                    repository: 'trinitronx/kodi-cookbook',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'trinitronx',
                    repository: 'kodi-cookbook',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'trinitronx',
                    repository: 'kodi-cookbook',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }
            ]
        },
        // third dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'jenkins.job_status',
                    job: 'efp-optimus-prime',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.branches',
                    repository: 'ReturnPath/efp-optimus-prime',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'ReturnPath/efp-optimus-prime',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'github.issue_labels_donut',
                    repository: 'ReturnPath/efp-optimus-prime',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                {
                    type: 'jenkins.job_builds',
                    job: 'efp-optimus-prime',
                    columns: 1, rows: 2,
                    x: 0, y: 1
                },
                {
                    type: 'jenkins.job_builds_histogram',
                    job: 'efp-optimus-prime',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'github.issue_labels_treemap',
                    repository: 'ReturnPath/efp-optimus-prime',
                    labels: [
                        { color: '#6bc2c8', count: 13, name: 'blocker'     },
                        { color: '#5f8cc0', count: 3,  name: 'enhancement' },
                        { color: '#525487', count: 7,  name: 'bug'         },
                        { color: '#383b72', count: 16, name: 'help-wanted' }
                    ],
                    columns: 1, rows: 1,
                    x: 3, y: 1
                },
                {
                    type: 'github.top_committer',
                    repository: 'ReturnPath/efp-optimus-prime',
                    frequency: 'daily',
                    columns: 1, rows: 1,
                    x: 1, y: 2
                },
                {
                    type: 'jenkins.view',
                    view: 'EFP',
                    columns: 2, rows: 1,
                    x: 2, y: 2
                }
            ]
        },
        // fourth dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'jenkins.job_status',
                    job: 'auth_big_downloads',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    user: 'STLMikey',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'ReturnPath/auth-big-downloads',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'jenkins.jobs',
                    columns: 1, rows: 2,
                    x: 3, y: 0
                },
                {
                    type: 'jenkins.job_builds',
                    job: 'auth_big_downloads',
                    columns: 1, rows: 2,
                    x: 0, y: 1
                },
                {
                    type: 'jenkins.job_builds_histogram',
                    job: 'auth_big_downloads',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'github.branches',
                    repository: 'ReturnPath/auth-big-downloads',
                    columns: 1, rows: 1,
                    x: 1, y: 2
                },
                {
                    type: 'github.issue_labels_donut',
                    repository: 'ReturnPath/auth-big-downloads',
                    columns: 1, rows: 1,
                    x: 2, y: 2
                },
                {
                    type: 'github.issue_labels_treemap',
                    repository: 'ReturnPath/auth-big-downloads',
                    labels: [
                        { color: '#6bc2c8', count: 13, name: 'blocker'     },
                        { color: '#5f8cc0', count: 3,  name: 'enhancement' },
                        { color: '#525487', count: 7,  name: 'bug'         },
                        { color: '#383b72', count: 16, name: 'help-wanted' }
                    ],
                    columns: 1, rows: 1,
                    x: 3, y: 2
                }
            ]
        }

    ]
};

module.exports = config;
