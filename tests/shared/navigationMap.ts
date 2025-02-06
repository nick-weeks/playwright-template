export const navigationMap = {
    Alerts: {
        navigationText: 'ALERTS',
        urlPath: '/alert',
        locator: '.NavButton',
        nth: 0,
        fullUrl: '/alert/my-alerts',

        myAlerts: {
            navigationText: 'My Alerts',
            urlPath: '/alert/my-alerts',
            locator: '.RoutableTabs__route',
            nth: 0
        },

        allAlerts: {
            navigationText: 'Active Alerts',
            urlPath: '/all-open-alerts',
            locator: '.RoutableTabs__route',
            nth: 1
        },

        closedAlerts: {
            navigationText: 'Closed Alerts',
            urlPath: '/all-closed-alerts',
            locator: '.RoutableTabs__route',
            nth: 2
        },
    },
    Targets: {
        navigationText: 'TARGETS',
        urlPath: '/vessel/targets',
        locator: '.NavButton',
        nth: 1,

        inChart: {
            navigationText: 'In Chart',
            urlPath: '/vessel/targets/in-chart',
            locator: '.RoutableTabs__route'
        },

        vessels: {
            navigationText: 'Vessels',
            urlPath: '/vessel/targets/all',
            locator: '.RoutableTabs__route',
            nth: 1,
        },

        atoNs: {
            navigationText: 'AtoNs',
            urlPath: '/vessel/targets/atons',
            locator: '.RoutableTabs__route',
            nth: 2,

            atoNsTab: {
                navigationText: 'AtoNs',
                urlPath: '/vessel/targets/atons',
                locator: '.Tabs__tab',

            },
            vatons: {
                navigationText: ' Vatons ',
                urlPath: '/vessel/targets/atons/vaton',
                locator: '.Tabs__tab',
                nth: 1,
            },
        },

        unidentified: {
            navigationText: 'Unidentified',
            urlPath: '/vessel/targets/unidentified',
            locator: '.RoutableTabs__route',
            nth: 3,
        },

        watchlist: {
            navigationText: 'Watchlist',
            urlPath: '/vessel/targets/watchlist',
            locator: '.RoutableTabs__route',
            nth: 4,
        },

        inspections: {
            navigationText: 'Inspections',
            urlPath: '/vessel/targets/inspections',
            locator: '.RoutableTabs__route',
            nth: 5,
        },

        changeRequests: {
            navigationText: 'Change Requests',
            urlPath: '/vessel/targets/change-requests',
            locator: '.RoutableTabs__route',
            nth: 6,
        },
        unmannedSurfaceVessels: {
            navigationText: 'Unmanned Surface Vessels',
            urlPath: '/vessel/targets/usv',
            locator: '.RoutableTabs__route',
            nth: 7,
        }
    },
    Comms: {
        navigationText: 'COMMS',
        urlPath: '/comms/chat',
        locator: '.NavButton',
        nth: 2,

        Messages: {
            navigationText: 'MESSAGES',
            urlPath: '/comms/chat',
            locator: '.NavButton',
            nth: 3,
        },
    },
    Reports: {
        navigationText: 'REPORTS',
        urlPath: '/reports',
        locator: '.NavButton',
        nth: 7,

        myReports: {
            navigationText: 'My Reports',
            urlPath: '/reports/my-reports',
            locator: '.RoutableTabs__route',


            last30Days: {
                navigationText: 'Last 30 Days',
                urlPath: '/30-days',
                locator: '.Tabs__tab',

            },
            Scheduled: {
                navigationText: 'Scheduled',
                urlPath: '/scheduled',
                locator: '.Tabs__tab',
                nth: 1,
            },
        },

        allReports: {
            navigationText: 'All Reports',
            urlPath: '/reports/all-reports',
            locator: '.RoutableTabs__route',
            nth: 1,

            last30Days: {
                navigationText: 'Last 30 Days',
                urlPath: '/30-days',
                locator: '.Tabs__tab',

            },
            Scheduled: {
                navigationText: 'Scheduled',
                urlPath: '/scheduled',
                locator: '.Tabs__tab',
                nth: 1,
            },
        },

        manageReports: {
            navigationText: 'Manage Reports',
            urlPath: '/reports/manage',
            locator: '.RoutableTabs__route',
            nth: 2,
            fullUrl: '/reports/manage/VESSEL_TRAFFIC',

            vesselTraffic: {
                navigationText: ' Vessel Traffic ',
                urlPath: '/VESSEL_TRAFFIC',
                locator: '.Tabs__tab',

            },
            Alert: {
                navigationText: ' Alert ',
                urlPath: '/ALERT',
                locator: '.Tabs__tab',
                nth: 1,
            },
            eLog: {
                navigationText: ' ELog ',
                urlPath: '/VESSEL_ELOG',
                locator: '.Tabs__tab',
                nth: 2,
            },
            WCPFC: {
                navigationText: ' WCPFC ',
                urlPath: '/WCPFC',
                locator: '.Tabs__tab',
                nth: 3,
            },
            vesselHistory: {
                navigationText: ' Vessel History ',
                urlPath: '/VESSEL_HISTORY',
                locator: '.Tabs__tab',
                nth: 4,
            },
            catchPerUnitEffort: {
                navigationText: ' Catch Per Unit Effort ',
                urlPath: '/CPUE',
                locator: '.Tabs__tab',
                nth: 5,
            },
        },
    },
    ConnectObserv: {
        navigationText: 'CONNECT-OBSERV',
        urlPath: '/connect-observ/observer',
        locator: '.NavButton',
        nth: 8,

        observers: {
            navigationText: 'Observers',
            urlPath: '/connect-observ/observer',
            locator: '.RoutableTabs__route',

        },

        trips: {
            navigationText: 'Trips',
            urlPath: '/connect-observ/trip',
            locator: '.RoutableTabs__route',
            nth: 1,
        },
    },
    Camera: {
        multiScreen: {
            navigationText: 'MULTISCREEN',
            urlPath: '/camera/multiscreen',
            locator: '.NavButton',
            nth: 10,
        },
    },
    Settings: {
        alertsAndEvents: {
            navigationText: 'ALERTS & EVENTS',
            urlPath: '/alert-event-settings',
            locator: '.NavButton',
            nth: 12,

            geofenceManagement: {
                navigationText: 'Geofence Management',
                urlPath: '/alert-event-settings/geofence',
                locator: '.RoutableTabs__route',

            },

            systemTriggers: {
                navigationText: 'System Triggers',
                urlPath: '/alert-event-settings/system-triggers',
                locator: '.RoutableTabs__route',
                nth: 1,
            },

            criteriaTemplates: {
                navigationText: 'Criteria Templates',
                urlPath: '/alert-event-settings/criteria-templates',
                locator: '.RoutableTabs__route',
                nth: 2,
            },

            alertActionTemplates: {
                navigationText: 'Alert Action Templates',
                urlPath: '/alert-event-settings/actions',
                locator: '.RoutableTabs__route',
                nth: 3,
            },
        },

        filters: {
            navigationText: 'FILTERS',
            urlPath: '/settings/filter',
            locator: '.NavButton',
            nth: 13,

            vesselFilters: {
                navigationText: 'Vessel Filters',
                urlPath: '/settings/filter/vessel/mine',
                locator: '.RoutableTabs__route',


                myFilters: {
                    navigationText: 'My Filters',
                    urlPath: '/settings/filter/vessel/mine',
                    locator: '.Tabs__tab',

                },

                systemFilters: {
                    navigationText: 'System Filters',
                    urlPath: '/settings/filter/vessel/system',
                    locator: '.Tabs__tab',
                    nth: 1,
                },
            },

            alertFilters: {
                navigationText: 'alertFilters',
                urlPath: '/settings/filter/alert/mine',
                locator: '.RoutableTabs__route',
                nth: 1,

                myFilters: {
                    navigationText: 'My Filters',
                    urlPath: '/settings/filter/alert/mine',
                    locator: '.Tabs__tab',

                },

                systemFilters: {
                    navigationText: 'System Filters',
                    urlPath: '/settings/filter/alert/system',
                    locator: '.Tabs__tab',
                    nth: 1,
                },
            },
        },

        users: {
            navigationText: 'USERS',
            urlPath: '/settings/users',
            locator: '.NavButton',
            nth: 14,

            myProfile: {
                navigationText: 'My Profile',
                urlPath: '/settings/users/my-profile',
                locator: '.RoutableTabs__route',

            },

            users: {
                navigationText: 'Users',
                urlPath: '/settings/users/list',
                locator: '.RoutableTabs__route',
                nth: 1,
            },

            groups: {
                navigationText: 'Groups',
                urlPath: '/settings/users/groups',
                locator: '.RoutableTabs__route',
                nth: 2,
            },

            Agency: {
                navigationText: 'Agency',
                urlPath: '/settings/users/agency',
                locator: '.RoutableTabs__route',
                nth: 3,
            },

            userAudit: {
                navigationText: 'User Audit',
                urlPath: '/settings/users/audit',
                locator: '.RoutableTabs__route',
                nth: 4,
            },

            activeUsers: {
                navigationText: 'Active Users',
                urlPath: '/settings/users/active',
                locator: '.RoutableTabs__route',
                nth: 5,
            },
        },

        healthMonitor: {
            navigationText: 'HEALTH MONITOR',
            urlPath: '/system-health',
            locator: '.NavButton',
            nth: 15,

            newActivities: {
                navigationText: ' NEW ACTIVITIES ',
                urlPath: '/system-health/activities',
                locator: '.SystemHealthButton',

            },

            coastStation: {
                navigationText: ' COAST STATION ',
                urlPath: '/system-health/coast',
                locator: '.SystemHealthButton',
                nth: 1,
            },
        },

        connect: {
            navigationText: 'CONNECT',
            urlPath: '/settings/connect',
            locator: '.NavButton',
            nth: 16,

            connectFish: {
                navigationText: 'CONNECT-FISH',
                urlPath: '/settings/connect/connect-fish',
                locator: '.RoutableTabs__route',


                port: {
                    navigationText: ' Port ',
                    urlPath: '/settings/connect/connect-fish/port',
                    locator: '.Tabs__tab',

                },
                species: {
                    navigationText: ' Species ',
                    urlPath: '/settings/connect/connect-fish/species',
                    locator: '.Tabs__tab',
                    nth: 1,
                },
                transhipmentVessel: {
                    navigationText: ' Transhipment Vessel ',
                    urlPath: '/settings/connect/connect-fish/transhipment_vessel',
                    locator: '.Tabs__tab',
                    nth: 2,
                },
                associationCode: {
                    navigationText: ' Association Code ',
                    urlPath: '/settings/connect/connect-fish/association_code',
                    locator: '.Tabs__tab',
                    nth: 3,
                },
                discard0: {
                    navigationText: ' Discard 0 ',
                    urlPath: '/settings/connect/connect-fish/discard0',
                    locator: '.Tabs__tab',
                    nth: 4,
                },
                discard1: {
                    navigationText: ' Discard 1 ',
                    urlPath: '/settings/connect/connect-fish/discard1',
                    locator: '.Tabs__tab',
                    nth: 5,
                },
                agent: {
                    navigationText: ' Agent ',
                    urlPath: '/settings/connect/connect-fish/agent',
                    locator: '.Tabs__tab',
                    nth: 6,
                },
                bunkeringVessel: {
                    navigationText: ' Bunkering Vessel ',
                    urlPath: '/settings/connect/connect-fish/bunkering_vessel',
                    locator: '.Tabs__tab',
                    nth: 7,
                },
            },
        },

        transceivers: {
            navigationText: 'TRANSCEIVERS',
            urlPath: '/transceivers/transceiver-list',
            locator: '.NavButton',
            nth: 17,
        },

        configuration: {
            navigationText: 'CONFIGURATION',
            urlPath: '/settings/configuration/',
            locator: '.NavButton',
            nth: 18,

            vesselTracks: {
                navigationText: 'Vessel Tracks',
                urlPath: '/settings/configuration/tracks',
                locator: '.RoutableTabs__route',

            },

            camera: {
                navigationText: 'Camera',
                urlPath: '/settings/configuration/camera/surveillance',
                locator: '.RoutableTabs__route',
                nth: 1,
            },

            radar: {
                navigationText: 'Radar',
                urlPath: '/settings/configuration/radar/controls',
                locator: '.RoutableTabs__route',
                nth: 2,
            },

            palettes: {
                navigationText: 'Palettes',
                urlPath: '/settings/configuration/palette/user',
                locator: '.RoutableTabs__route',
                nth: 3,

                myPalettes: {
                    navigationText: ' My Palettes ',
                    urlPath: '/settings/configuration/palette/user',
                    locator: '.Tabs__tab',

                },

                systemPalettes: {
                    navigationText: ' System Palettes ',
                    urlPath: '/settings/configuration/palette/system',
                    locator: '.Tabs__tab',
                    nth: 1,
                },
            },

            homeFlags: {
                navigationText: 'Home Flags',
                urlPath: '/settings/configuration/home-flags',
                locator: '.RoutableTabs__route',
                nth: 4,
            },

            gear: {
                navigationText: 'Gear',
                urlPath: '/settings/configuration/gear',
                locator: '.RoutableTabs__route',
                nth: 5,
            },

            licenseTypes: {
                navigationText: 'License Types',
                urlPath: '/settings/configuration/licenses',
                locator: '.RoutableTabs__route',
                nth: 6,
            },

            tags: {
                navigationText: 'Tags',
                urlPath: '/settings/configuration/tag',
                locator: '.RoutableTabs__route',
                nth: 7,
            },

            geofenceDefaults: {
                navigationText: 'Geofence Defaults',
                urlPath: '/settings/configuration/geofence-default',
                locator: '.RoutableTabs__route',
                nth: 8,
            },
        },

        dataExtraction: {
            navigationText: 'DATA EXTRACTION',
            urlPath: '/settings/data-extraction',
            locator: '.NavButton',
            nth: 19,

            managePartners: {
                navigationText: 'Manage Partners',
                urlPath: '/settings/data-extraction/manage-partners',
                locator: '.RoutableTabs__route',

            },

            dataExtraction: {
                navigationText: 'Data Extraction',
                urlPath: '/settings/data-extraction/dataextract',
                locator: '.RoutableTabs__route',
                nth: 1,
            },

            history: {
                navigationText: 'History',
                urlPath: '/settings/data-extraction/history',
                locator: '.RoutableTabs__route',
                nth: 2,
            },
        },

        sensorStations: {
            navigationText: 'SENSOR STATIONS',
            urlPath: '/sensor-station',
            locator: '.NavButton',
            nth: 20,
        },
    },
    Weather: {
        navigationText: 'WEATHER',
        urlPath: '/weather',
        locator: '.NavButton',
        nth: 21,

        sensorStation: {
            navigationText: 'Sensor Station',
            urlPath: '/weather/live',
            locator: '.RoutableTabs__route',

        },
        atoN: {
            navigationText: 'AtoN',
            urlPath: '/weather/meteo-tidal-atons',
            locator: '.RoutableTabs__route',
            nth: 1,
        },
        warnings: {
            navigationText: 'Warnings',
            urlPath: '/weather/warnings',
            locator: '.RoutableTabs__route',
            nth: 2,

            weatherWarnings: {
                navigationText: ' Weather Warnings ',
                urlPath: '/weather/warnings/weather-alerts',
                locator: '.Tabs__tab',

            },
            weatherAlertsHistory: {
                navigationText: ' Weather Alerts History ',
                urlPath: '/weather/warnings/history',
                locator: '.Tabs__tab',
                nth: 1,
            },
        },
    },
}
