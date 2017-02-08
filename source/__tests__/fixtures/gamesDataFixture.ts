export const gamesDataFixture = [
    {
      "ID": 1,
      "Name": "World of Warcraft",
      "Slug": "wow",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 33,
          "GameId": 1,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 1,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 1,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 1,
          "Name": "Logo"
        }
      ],
      "GameFiles": [
        {
          "Id": 1,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "WoW.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 2,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "WoW-64.exe",
          "FileType": 2,
          "PlatformType": 3
        },
        {
          "Id": 3,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "World of Warcraft Launcher.exe",
          "FileType": 3,
          "PlatformType": 4
        },
        {
          "Id": 4,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "world.MPQ.lock",
          "FileType": 4,
          "PlatformType": 1
        },
        {
          "Id": 151,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "World of Warcraft.app",
          "FileType": 2,
          "PlatformType": 5
        },
        {
          "Id": 187,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "WowB.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 188,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "WowB-64.exe",
          "FileType": 2,
          "PlatformType": 3
        },
        {
          "Id": 189,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "World of Warcraft Beta Launcher.exe",
          "FileType": 3,
          "PlatformType": 4
        },
        {
          "Id": 190,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "WowT.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 191,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "WoWT-64.exe",
          "FileType": 2,
          "PlatformType": 3
        },
        {
          "Id": 192,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "World of Warcraft Public Test Launcher.exe",
          "FileType": 3,
          "PlatformType": 4
        },
        {
          "Id": 195,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "World of Warcraft Beta.app",
          "FileType": 2,
          "PlatformType": 5
        },
        {
          "Id": 196,
          "GameId": 1,
          "IsRequired": false,
          "FileName": "World of Warcraft Public Test.app",
          "FileType": 2,
          "PlatformType": 5
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 2,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Blizzard Entertainment\\World of Warcraft",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 3,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Blizzard Entertainment\\World of Warcraft",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 4,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\VirtualStore\\MACHINE\\SOFTWARE\\Blizzard Entertainment\\World of Warcraft",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 5,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\World of Warcraft",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 6,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\World of Warcraft",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 7,
          "HintType": 2,
          "HintPath": "%Public%\\Games\\World of Warcraft",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1014,
          "HintType": 2,
          "HintPath": "/Applications/World of Warcraft",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1026,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Blizzard Entertainment\\World of Warcraft\\PTR",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 1027,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Blizzard Entertainment\\World of Warcraft\\PTR",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 1028,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\VirtualStore\\MACHINE\\SOFTWARE\\Blizzard Entertainment\\World of Warcraft\\PTR",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 1034,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\World of Warcraft Beta",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1035,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\World of Warcraft Beta",
          "HintKey": "",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [
        {
          "CommentStripPattern": "(?s)<!--.*?-->",
          "FileExtension": ".xml",
          "InclusionPattern": "(?i)<(?:Include|Script)\\s+file=[\"\"']((?:(?<!\\.\\.).)+)[\"\"']\\s*/>"
        },
        {
          "CommentStripPattern": "(?m)\\s*#.*$",
          "FileExtension": ".toc",
          "InclusionPattern": "(?mi)^\\s*((?:(?<!\\.\\.).)+\\.(?:xml|lua))\\s*$"
        }
      ],
      "CategorySections": [
        {
          "ID": 1,
          "GameID": 1,
          "Name": "Addons",
          "PackageType": 1,
          "Path": "interface\\addons",
          "InitialInclusionPattern": "(?i)^([^/]+)[\\\\/]\\1\\.toc$",
          "ExtraIncludePattern": "(?i)^[^/\\\\]+[/\\\\]Bindings\\.xml$"
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 12,
      "SupportsNotifications": true,
      "BundleAssets": true
    },
    {
      "ID": 11,
      "Name": "Dungeons & Dragons Online",
      "Slug": "DDO",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 11,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 11,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 11,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 11,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 11,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 11,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 11,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 12,
      "Name": "EVE Online",
      "Slug": "eve",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 12,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 12,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 12,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 12,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 12,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 12,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 12,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 150,
          "GameId": 12,
          "IsRequired": true,
          "FileName": "exefile.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 13,
      "Name": "EverQuest",
      "Slug": "eq",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 13,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 13,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 13,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 13,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 13,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 13,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 13,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 149,
          "GameId": 13,
          "IsRequired": true,
          "FileName": "eqgame.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 33,
      "Name": "Lord of the Rings Online",
      "Slug": "lotro",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 33,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 33,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 33,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 33,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 33,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 33,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 33,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 108,
          "GameId": 33,
          "IsRequired": true,
          "FileName": "lotroclient.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 36,
      "Name": "Star Trek Online",
      "Slug": "startreakonline",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 36,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 36,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 36,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 36,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 36,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 36,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 36,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 85,
          "GameId": 36,
          "IsRequired": true,
          "FileName": "Star Trek Online.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 64,
      "Name": "The Secret World",
      "Slug": "tsw",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 64,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 64,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 64,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 64,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 64,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 64,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 64,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 260,
          "GameId": 64,
          "IsRequired": true,
          "FileName": "thesecretworld.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 263,
          "GameId": 64,
          "IsRequired": false,
          "FileName": "ClientPatcher.exe",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1020,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Funcom\\The Secret World",
          "HintKey": "LastInstalledClient",
          "HintOptions": 0
        },
        {
          "ID": 1021,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Funcom\\The Secret World",
          "HintKey": "LastInstalledClient",
          "HintOptions": 0
        },
        {
          "ID": 1022,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\The Secret World",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1023,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\The Secret World",
          "HintKey": "",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [],
      "CategorySections": [
        {
          "ID": 14,
          "GameID": 64,
          "Name": "Mods",
          "PackageType": 4,
          "Path": "Data\\Gui\\Customized",
          "InitialInclusionPattern": "([^\\/\\\\]+\\.ctoc)$",
          "ExtraIncludePattern": "([^\\/\\\\]+\\.ctoc)$"
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 65,
      "Name": "StarCraft II",
      "Slug": "sc2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 65,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 65,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 65,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 65,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 65,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 65,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 65,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 38,
          "GameId": 65,
          "IsRequired": false,
          "FileName": "StarCraft II.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 39,
          "GameId": 65,
          "IsRequired": false,
          "FileName": "SC2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 70,
      "Name": "9Dragons",
      "Slug": "9Dragons",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 70,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 70,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 70,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 70,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 70,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 70,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 70,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 122,
      "Name": "Knight Online",
      "Slug": "KO",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 122,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 122,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 122,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 122,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 122,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 122,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 122,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 218,
          "GameId": 122,
          "IsRequired": true,
          "FileName": "KnightOnLine.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 335,
      "Name": "Runes of Magic",
      "Slug": "RoM",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 335,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 335,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 335,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 335,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 335,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 335,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 335,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 257,
          "GameId": 335,
          "IsRequired": false,
          "FileName": "client.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 264,
          "GameId": 335,
          "IsRequired": true,
          "FileName": "Runes of Magic.exe",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1015,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Frogster Interactive Pictures\\Runes of Magic",
          "HintKey": "RootDir",
          "HintOptions": 0
        },
        {
          "ID": 1016,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\Runes of Magic",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1017,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\Runes of Magic",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1036,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Runes of Magic",
          "HintKey": "InstallDir",
          "HintOptions": 0
        },
        {
          "ID": 1037,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\GameforgeLive\\Games\\USA_eng\\Runes Of Magic",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1038,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\GameforgeLive\\Games\\USA_eng\\Runes Of Magic",
          "HintKey": "",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [],
      "CategorySections": [
        {
          "ID": 1,
          "GameID": 335,
          "Name": "Addons",
          "PackageType": 1,
          "Path": "interface\\addons",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 339,
      "Name": "Star Wars: The Old Republic",
      "Slug": "swtor",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 339,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 339,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 339,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 339,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 339,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 339,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 339,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 65,
          "GameId": 339,
          "IsRequired": true,
          "FileName": "launcher.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 66,
          "GameId": 339,
          "IsRequired": true,
          "FileName": "brwc_swtor.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 341,
      "Name": "League of Legends",
      "Slug": "lol",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 33,
          "GameId": 341,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 341,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 341,
          "Name": "Icon32"
        }
      ],
      "GameFiles": [
        {
          "Id": 8,
          "GameId": 341,
          "IsRequired": true,
          "FileName": "lol.launcher.exe",
          "FileType": 3,
          "PlatformType": 4
        },
        {
          "Id": 156,
          "GameId": 341,
          "IsRequired": false,
          "FileName": "LoLLauncher.app",
          "FileType": 3,
          "PlatformType": 5
        },
        {
          "Id": 157,
          "GameId": 341,
          "IsRequired": false,
          "FileName": "LeagueofLegends.app",
          "FileType": 2,
          "PlatformType": 5
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": true,
      "Order": 1,
      "SupportsNotifications": true,
      "BundleAssets": true
    },
    {
      "ID": 391,
      "Name": "Final Fantasy XIV",
      "Slug": "ffxiv",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 391,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 391,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 391,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 391,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 391,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 391,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 391,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 184,
          "GameId": 391,
          "IsRequired": false,
          "FileName": "ffxiv.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 258,
          "GameId": 391,
          "IsRequired": false,
          "FileName": "ffxiv_dx11.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 412,
      "Name": "Guild Wars 2",
      "Slug": "gw2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 412,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 412,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 412,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 412,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 412,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 412,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 412,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 23,
          "GameId": 412,
          "IsRequired": false,
          "FileName": "gw2.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 225,
          "GameId": 412,
          "IsRequired": false,
          "FileName": "Gw2-64.exe",
          "FileType": 2,
          "PlatformType": 3
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 414,
      "Name": "Diablo 3",
      "Slug": "diablo-3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 33,
          "GameId": 414,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 414,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 414,
          "Name": "Icon32"
        }
      ],
      "GameFiles": [
        {
          "Id": 153,
          "GameId": 414,
          "IsRequired": true,
          "FileName": "Diablo III.app",
          "FileType": 2,
          "PlatformType": 5
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 12,
      "SupportsNotifications": true,
      "BundleAssets": true
    },
    {
      "ID": 418,
      "Name": "APB Reloaded",
      "Slug": "APB",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 418,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 418,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 418,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 418,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 418,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 418,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 418,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 89,
          "GameId": 418,
          "IsRequired": true,
          "FileName": "APB.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 423,
      "Name": "World of Tanks",
      "Slug": "wot",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 423,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 423,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 423,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 423,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 423,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 423,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 423,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 18,
          "GameId": 423,
          "IsRequired": false,
          "FileName": "WorldOfTanks.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 265,
          "GameId": 423,
          "IsRequired": false,
          "FileName": "WOTLauncher.exe",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1024,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\World_of_Tanks",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1025,
          "HintType": 2,
          "HintPath": "C:\\Games\\World_of_Tanks",
          "HintKey": "",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [],
      "CategorySections": [
        {
          "ID": 8,
          "GameID": 423,
          "Name": "Mods",
          "PackageType": 4,
          "Path": "res_mods\\0.9.16.0.0",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        },
        {
          "ID": 9,
          "GameID": 423,
          "Name": "Skins",
          "PackageType": 4,
          "Path": "res_mods\\0.9.16.0.0",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 10,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 424,
      "Name": "Rift",
      "Slug": "rift",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 424,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 424,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 424,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 424,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 424,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 424,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 424,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 256,
          "GameId": 424,
          "IsRequired": false,
          "FileName": "rift.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 259,
          "GameId": 424,
          "IsRequired": false,
          "FileName": "rift_x64.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 266,
          "GameId": 424,
          "IsRequired": false,
          "FileName": "riftpatchlive.exe",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1018,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\Rift Game",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1019,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\Rift Game",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1039,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\Glyph\\Games\\RIFT\\Live",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1040,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\Glyph\\Games\\RIFT\\Live",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1041,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Glyph RIFT",
          "HintKey": "Installlocation",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [
        {
          "CommentStripPattern": "(?m)\\s*#.*$",
          "FileExtension": ".toc",
          "InclusionPattern": "['\"](.*\\.lua)['\"]"
        }
      ],
      "CategorySections": [
        {
          "ID": 1,
          "GameID": 424,
          "Name": "Addons",
          "PackageType": 1,
          "Path": "%PERSONAL%\\RIFT\\Interface\\AddOns",
          "InitialInclusionPattern": "(?i)^([^/]+)[\\\\/]RiftAddon\\.toc$",
          "ExtraIncludePattern": null
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 431,
      "Name": "Terraria",
      "Slug": "terraria",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 431,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 431,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 431,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 431,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 431,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 431,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 431,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 47,
          "GameId": 431,
          "IsRequired": true,
          "FileName": "Terraria.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 432,
      "Name": "Minecraft",
      "Slug": "mc",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 432,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 432,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 432,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 432,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 432,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 432,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 432,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 40,
          "GameId": 432,
          "IsRequired": true,
          "FileName": "instance.json",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1012,
          "HintType": 2,
          "HintPath": "%Public%\\Games\\Minecraft",
          "HintKey": "",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [],
      "CategorySections": [
        {
          "ID": 6,
          "GameID": 432,
          "Name": "Mods",
          "PackageType": 6,
          "Path": "mods",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        },
        {
          "ID": 12,
          "GameID": 432,
          "Name": "Texture Packs",
          "PackageType": 3,
          "Path": "resourcepacks",
          "InitialInclusionPattern": "([^\\/\\\\]+\\.zip)$",
          "ExtraIncludePattern": "([^\\/\\\\]+\\.zip)$"
        },
        {
          "ID": 17,
          "GameID": 432,
          "Name": "Worlds",
          "PackageType": 1,
          "Path": "saves",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        },
        {
          "ID": 4471,
          "GameID": 432,
          "Name": "Modpacks",
          "PackageType": 5,
          "Path": "downloads",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": true,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 438,
      "Name": "Tropico 4",
      "Slug": "tropico4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 438,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 438,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 438,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 438,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 438,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 438,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 438,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 123,
          "GameId": 438,
          "IsRequired": true,
          "FileName": "Tropico4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 441,
      "Name": "Dragon Nest",
      "Slug": "dragon-nest",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 441,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 441,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 441,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 441,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 441,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 441,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 441,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 67,
          "GameId": 441,
          "IsRequired": true,
          "FileName": "DragonNest.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 447,
      "Name": "Fallout: New Vegas",
      "Slug": "falloutnv",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 447,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 447,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 447,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 447,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 447,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 447,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 447,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 78,
          "GameId": 447,
          "IsRequired": true,
          "FileName": "FalloutNV.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 448,
      "Name": "Just Cause 2",
      "Slug": "jc2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 448,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 448,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 448,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 448,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 448,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 448,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 448,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 106,
          "GameId": 448,
          "IsRequired": true,
          "FileName": "JustCause2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 449,
      "Name": "Skyrim",
      "Slug": "skyrim",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 449,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 449,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 449,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 449,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 449,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 449,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 449,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 25,
          "GameId": 449,
          "IsRequired": false,
          "FileName": "TESV.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 224,
          "GameId": 449,
          "IsRequired": false,
          "FileName": "SkyrimSE.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 452,
      "Name": "Borderlands 2",
      "Slug": "bl2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 452,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 452,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 452,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 452,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 452,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 452,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 452,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 60,
          "GameId": 452,
          "IsRequired": true,
          "FileName": "Borderlands2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 454,
      "Name": "WildStar",
      "Slug": "ws",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 454,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 454,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 454,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 454,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 454,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 454,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 454,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 27,
          "GameId": 454,
          "IsRequired": false,
          "FileName": "WildStar64.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 28,
          "GameId": 454,
          "IsRequired": false,
          "FileName": "WildStar32.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 262,
          "GameId": 454,
          "IsRequired": true,
          "FileName": "Wildstar.exe",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1029,
          "HintType": 1,
          "HintPath": "HKEY_CURRENT_USER\\Software\\NCSoft\\WildStar",
          "HintKey": "LastRun",
          "HintOptions": 0
        },
        {
          "ID": 1032,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES%\\NCSOFT\\WildStar",
          "HintKey": "",
          "HintOptions": 0
        },
        {
          "ID": 1033,
          "HintType": 2,
          "HintPath": "%PROGRAMFILES(x86)%\\NCSOFT\\WildStar",
          "HintKey": "",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [
        {
          "CommentStripPattern": "(?s)<!--.*?-->",
          "FileExtension": ".xml",
          "InclusionPattern": "(?i)<(?:Form|Script)(?:[^>]*\\s)Name\\s*=\\s*[\"\"']([^\"\"']+)[\"\"'][^>]*/>"
        }
      ],
      "CategorySections": [
        {
          "ID": 18,
          "GameID": 454,
          "Name": "Addons",
          "PackageType": 1,
          "Path": "%APPDATA%\\NCSoft\\Wildstar\\addons",
          "InitialInclusionPattern": "(?i)^[^/\\\\]+[/\\\\]toc\\.xml$",
          "ExtraIncludePattern": null
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 10,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 455,
      "Name": "The Elder Scrolls Online",
      "Slug": "teso",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 455,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 455,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 455,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 455,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 455,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 455,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 455,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 131,
          "GameId": 455,
          "IsRequired": false,
          "FileName": "eso.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 186,
          "GameId": 455,
          "IsRequired": false,
          "FileName": "eso64.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 261,
          "GameId": 455,
          "IsRequired": true,
          "FileName": "Launcher\\Bethesda.net_Launcher.exe",
          "FileType": 3,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [
        {
          "ID": 1030,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Zenimax_Online\\Launcher",
          "HintKey": "InstallPath",
          "HintOptions": 0
        },
        {
          "ID": 1031,
          "HintType": 1,
          "HintPath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Zenimax_Online\\Launcher",
          "HintKey": "InstallPath",
          "HintOptions": 0
        }
      ],
      "FileParsingRules": [],
      "CategorySections": [
        {
          "ID": 19,
          "GameID": 455,
          "Name": "Addons",
          "PackageType": 1,
          "Path": "%MYDOCUMENTS%\\Elder Scrolls Online\\live\\AddOns",
          "InitialInclusionPattern": ".",
          "ExtraIncludePattern": null
        }
      ],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": true,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 456,
      "Name": "Firefall",
      "Slug": "firefall",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 456,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 456,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 456,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 456,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 456,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 456,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 456,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 12,
          "GameId": 456,
          "IsRequired": true,
          "FileName": "Launcher.exe",
          "FileType": 3,
          "PlatformType": 4
        },
        {
          "Id": 13,
          "GameId": 456,
          "IsRequired": true,
          "FileName": "FirefallClient.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 125,
          "GameId": 456,
          "IsRequired": true,
          "FileName": "FirefallClient.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 457,
      "Name": "Strife",
      "Slug": "strife",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 33,
          "GameId": 457,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 457,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 457,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 457,
          "Name": "Logo"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": true,
      "Order": 3,
      "SupportsNotifications": true,
      "BundleAssets": true
    },
    {
      "ID": 458,
      "Name": "SMITE",
      "Slug": "smite",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 33,
          "GameId": 458,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 458,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 458,
          "Name": "Icon32"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": true,
      "Order": 2,
      "SupportsNotifications": true,
      "BundleAssets": true
    },
    {
      "ID": 459,
      "Name": "Hearthstone",
      "Slug": "hearthstone",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 459,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 459,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 459,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 459,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 459,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 459,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 459,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 14,
          "GameId": 459,
          "IsRequired": true,
          "FileName": "Hearthstone.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 15,
          "GameId": 459,
          "IsRequired": false,
          "FileName": "battle.net.dll",
          "FileType": 1,
          "PlatformType": 4
        },
        {
          "Id": 154,
          "GameId": 459,
          "IsRequired": true,
          "FileName": "Hearthstone.app",
          "FileType": 2,
          "PlatformType": 5
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 10,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 460,
      "Name": "ArcheAge",
      "Slug": "archeage",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 460,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 460,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 460,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 460,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 460,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 460,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 460,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 16,
          "GameId": 460,
          "IsRequired": true,
          "FileName": "archeage.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 461,
      "Name": "Team Fortress 2",
      "Slug": "tf2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 461,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 461,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 461,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 461,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 461,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 461,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 461,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 51,
          "GameId": 461,
          "IsRequired": true,
          "FileName": "hl2.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 52,
          "GameId": 461,
          "IsRequired": true,
          "FileName": "tf\\resource\\tf2.ttf",
          "FileType": 1,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 462,
      "Name": "Heroes of the Storm",
      "Slug": "hots",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 462,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 462,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 462,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 462,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 462,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 462,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 462,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 24,
          "GameId": 462,
          "IsRequired": true,
          "FileName": "HeroesOfTheStorm.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 129,
          "GameId": 462,
          "IsRequired": false,
          "FileName": "HeroesOfTheStorm_x64.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 155,
          "GameId": 462,
          "IsRequired": true,
          "FileName": "Heroes.app",
          "FileType": 2,
          "PlatformType": 5
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 12,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 463,
      "Name": "DOTA 2",
      "Slug": "dota2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 463,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 463,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 463,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 463,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 463,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 463,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 463,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 19,
          "GameId": 463,
          "IsRequired": true,
          "FileName": "dota2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 464,
      "Name": "Civilization V",
      "Slug": "civiilzationV",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 464,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 464,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 464,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 464,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 464,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 464,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 464,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 20,
          "GameId": 464,
          "IsRequired": false,
          "FileName": "CiviilzationV.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 29,
          "GameId": 464,
          "IsRequired": false,
          "FileName": "CivilizationV_DX11.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 465,
      "Name": "Counter-Strike: GO",
      "Slug": "csgo",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 465,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 465,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 465,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 465,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 465,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 465,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 465,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 21,
          "GameId": 465,
          "IsRequired": true,
          "FileName": "csgo.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 466,
      "Name": "Battlefield 4",
      "Slug": "bf4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 466,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 466,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 466,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 466,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 466,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 466,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 466,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 22,
          "GameId": 466,
          "IsRequired": true,
          "FileName": "bf4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 467,
      "Name": "Path of Exile",
      "Slug": "poe",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 467,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 467,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 467,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 467,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 467,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 467,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 467,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 26,
          "GameId": 467,
          "IsRequired": false,
          "FileName": "PathOfExile.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 167,
          "GameId": 467,
          "IsRequired": false,
          "FileName": "PathOfExileSteam.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 468,
      "Name": "DayZ",
      "Slug": "dayz",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 468,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 468,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 468,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 468,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 468,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 468,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 468,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 17,
          "GameId": 468,
          "IsRequired": true,
          "FileName": "dayz.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 469,
      "Name": "Shadow of Mordor",
      "Slug": "som",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 469,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 469,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 469,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 469,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 469,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 469,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 469,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 30,
          "GameId": 469,
          "IsRequired": true,
          "FileName": "ShadowOfMordor.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 470,
      "Name": "Life is Feudal",
      "Slug": "lif",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 470,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 470,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 470,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 470,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 470,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 470,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 470,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 31,
          "GameId": 470,
          "IsRequired": true,
          "FileName": "yo_cm_client.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 12,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 471,
      "Name": "Warframe",
      "Slug": "warframe",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 471,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 471,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 471,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 471,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 471,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 471,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 471,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 32,
          "GameId": 471,
          "IsRequired": false,
          "FileName": "Warframe.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 33,
          "GameId": 471,
          "IsRequired": false,
          "FileName": "Warframe.x64.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 12,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 472,
      "Name": "Borderlands: The Pre-Sequel!",
      "Slug": "blps",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 472,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 472,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 472,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 472,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 472,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 472,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 472,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 34,
          "GameId": 472,
          "IsRequired": true,
          "FileName": "BorderlandsPreSequel.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 473,
      "Name": "Evolve",
      "Slug": "eolve",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 473,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 473,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 473,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 473,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 473,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 473,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 473,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 35,
          "GameId": 473,
          "IsRequired": true,
          "FileName": "Evolve.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 474,
      "Name": "Company of Heroes 2",
      "Slug": "CoH2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 474,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 474,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 474,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 474,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 474,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 474,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 474,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 228,
          "GameId": 474,
          "IsRequired": true,
          "FileName": "RelicCoH2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 475,
      "Name": "Call of Duty: Black Ops II",
      "Slug": "codbops2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 475,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 475,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 475,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 475,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 475,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 475,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 475,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 57,
          "GameId": 475,
          "IsRequired": true,
          "FileName": "t6sp.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 476,
      "Name": "Unturned",
      "Slug": "unturned",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 476,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 476,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 476,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 476,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 476,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 476,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 476,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 49,
          "GameId": 476,
          "IsRequired": true,
          "FileName": "Unturned.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 477,
      "Name": "War Thunder",
      "Slug": "war-thunder",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 477,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 477,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 477,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 477,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 477,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 477,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 477,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 58,
          "GameId": 477,
          "IsRequired": true,
          "FileName": "launcher.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 59,
          "GameId": 477,
          "IsRequired": true,
          "FileName": "warthunder.yup",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 478,
      "Name": "Arma 3",
      "Slug": "arma3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 478,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 478,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 478,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 478,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 478,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 478,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 478,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 61,
          "GameId": 478,
          "IsRequired": true,
          "FileName": "arma3.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 479,
      "Name": "XCOM: Enemy Unknown",
      "Slug": "xcom",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 479,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 479,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 479,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 479,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 479,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 479,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 479,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 62,
          "GameId": 479,
          "IsRequired": true,
          "FileName": "XComGame.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 480,
      "Name": "Robocraft",
      "Slug": "robocraft",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 480,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 480,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 480,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 480,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 480,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 480,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 480,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 45,
          "GameId": 480,
          "IsRequired": false,
          "FileName": "Robocraft.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 46,
          "GameId": 480,
          "IsRequired": false,
          "FileName": "RobocraftClient.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 158,
          "GameId": 480,
          "IsRequired": true,
          "FileName": "Robocraft.app",
          "FileType": 2,
          "PlatformType": 5
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 481,
      "Name": "Total War: ROME II",
      "Slug": "rome2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 481,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 481,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 481,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 481,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 481,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 481,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 481,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 50,
          "GameId": 481,
          "IsRequired": true,
          "FileName": "Rome2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 482,
      "Name": "PAYDAY: The Heist",
      "Slug": "payday",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 482,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 482,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 482,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 482,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 482,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 482,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 482,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 63,
          "GameId": 482,
          "IsRequired": true,
          "FileName": "payday_win32_release.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 483,
      "Name": "Counter-Strike: Source",
      "Slug": "css",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 483,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 483,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 483,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 483,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 483,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 483,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 483,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 53,
          "GameId": 483,
          "IsRequired": true,
          "FileName": "hl2.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 54,
          "GameId": 483,
          "IsRequired": true,
          "FileName": "cstrike\\resource\\cstrike.ttf",
          "FileType": 1,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 484,
      "Name": "Garry's Mod",
      "Slug": "gmod",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 484,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 484,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 484,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 484,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 484,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 484,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 484,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 55,
          "GameId": 484,
          "IsRequired": true,
          "FileName": "hl2.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 56,
          "GameId": 484,
          "IsRequired": true,
          "FileName": "garrysmod\\garrysmod.ver",
          "FileType": 1,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 487,
      "Name": "PAYDAY 2",
      "Slug": "payday2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 487,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 487,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 487,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 487,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 487,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 487,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 487,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 64,
          "GameId": 487,
          "IsRequired": true,
          "FileName": "payday2_win32_release.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 488,
      "Name": "Civilization: Beyond Earth",
      "Slug": "civbe",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 488,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 488,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 488,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 488,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 488,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 488,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 488,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 36,
          "GameId": 488,
          "IsRequired": false,
          "FileName": "CivilizationBE_DX11.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 37,
          "GameId": 488,
          "IsRequired": false,
          "FileName": "CivilizationBE_Mantle.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 489,
      "Name": "FIFA 15",
      "Slug": "fifa15",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 489,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 489,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 489,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 489,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 489,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 489,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 489,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 141,
          "GameId": 489,
          "IsRequired": true,
          "FileName": "fifa15.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 490,
      "Name": "Call of Duty: Advanced Warfare",
      "Slug": "codaw",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 490,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 490,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 490,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 490,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 490,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 490,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 490,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 41,
          "GameId": 490,
          "IsRequired": false,
          "FileName": "s1_mp64_ship.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 42,
          "GameId": 490,
          "IsRequired": false,
          "FileName": "s1_sp64_ship.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 491,
      "Name": "Dragon Age: Inquisition",
      "Slug": "dai",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 491,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 491,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 491,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 491,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 491,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 491,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 491,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 43,
          "GameId": 491,
          "IsRequired": true,
          "FileName": "DragonAgeInquisition.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 492,
      "Name": "Rust",
      "Slug": "rust",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 492,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 492,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 492,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 492,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 492,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 492,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 492,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 48,
          "GameId": 492,
          "IsRequired": true,
          "FileName": "RustClient.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 493,
      "Name": "Left 4 Dead 2",
      "Slug": "l4d2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 493,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 493,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 493,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 493,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 493,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 493,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 493,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 44,
          "GameId": 493,
          "IsRequired": true,
          "FileName": "left4dead2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 495,
      "Name": "Far Cry 4",
      "Slug": "farcry4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 495,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 495,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 495,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 495,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 495,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 495,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 495,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 68,
          "GameId": 495,
          "IsRequired": true,
          "FileName": "FarCry4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 496,
      "Name": "Grand Theft Auto V",
      "Slug": "gta5",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 496,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 496,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 496,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 496,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 496,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 496,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 496,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 145,
          "GameId": 496,
          "IsRequired": true,
          "FileName": "GTA5.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 497,
      "Name": "Binding of Isaac Rebirth",
      "Slug": "isaac",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 497,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 497,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 497,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 497,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 497,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 497,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 497,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 69,
          "GameId": 497,
          "IsRequired": true,
          "FileName": "isaac-ng.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 498,
      "Name": "Arma 2 Operation Arrowhead",
      "Slug": "arma2oa",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 498,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 498,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 498,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 498,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 498,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 498,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 498,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 70,
          "GameId": 498,
          "IsRequired": true,
          "FileName": "ArmA2OA.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 499,
      "Name": "Heroes & Generals",
      "Slug": "heroesgenerals",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 499,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 499,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 499,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 499,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 499,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 499,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 499,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 71,
          "GameId": 499,
          "IsRequired": false,
          "FileName": "HeroesAndGeneralsDesktop.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 72,
          "GameId": 499,
          "IsRequired": false,
          "FileName": "hng.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 500,
      "Name": "Mount and Blade Warband",
      "Slug": "mbwar",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 500,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 500,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 500,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 500,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 500,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 500,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 500,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 73,
          "GameId": 500,
          "IsRequired": true,
          "FileName": "mb_warband.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 501,
      "Name": "This War of Mine",
      "Slug": "twom",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 501,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 501,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 501,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 501,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 501,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 501,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 501,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 74,
          "GameId": 501,
          "IsRequired": true,
          "FileName": "This War of Mine.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 502,
      "Name": "Counter-Strike Nexon: Zombies",
      "Slug": "csonline",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 502,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 502,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 502,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 502,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 502,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 502,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 502,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 75,
          "GameId": 502,
          "IsRequired": true,
          "FileName": "cstrike-online.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 503,
      "Name": "Cube World",
      "Slug": "cubeworld",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 503,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 503,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 503,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 503,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 503,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 503,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 503,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 76,
          "GameId": 503,
          "IsRequired": true,
          "FileName": "Cube.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 504,
      "Name": "Euro Truck Simulator 2",
      "Slug": "eurotrucks2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 504,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 504,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 504,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 504,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 504,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 504,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 504,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 77,
          "GameId": 504,
          "IsRequired": true,
          "FileName": "eurotrucks2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 505,
      "Name": "Infinite Crisis",
      "Slug": "infinite-crisis",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 505,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 505,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 505,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 505,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 505,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 505,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 505,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 79,
          "GameId": 505,
          "IsRequired": true,
          "FileName": "InfiniteCrisis.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 506,
      "Name": "Insurgency",
      "Slug": "insurgency",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 506,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 506,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 506,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 506,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 506,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 506,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 506,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 80,
          "GameId": 506,
          "IsRequired": true,
          "FileName": "insurgency.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 507,
      "Name": "Kerbal Space Program",
      "Slug": "ksp",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 507,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 507,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 507,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 507,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 507,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 507,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 507,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 81,
          "GameId": 507,
          "IsRequired": false,
          "FileName": "ksp.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 82,
          "GameId": 507,
          "IsRequired": false,
          "FileName": "KSP_x64.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 508,
      "Name": "Neverwinter",
      "Slug": "neverwinter",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 508,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 508,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 508,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 508,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 508,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 508,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 508,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 83,
          "GameId": 508,
          "IsRequired": true,
          "FileName": "Neverwinter.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 509,
      "Name": "Titanfall",
      "Slug": "titanfall",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 509,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 509,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 509,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 509,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 509,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 509,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 509,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 84,
          "GameId": 509,
          "IsRequired": true,
          "FileName": "Titanfall.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 510,
      "Name": "The Sims 4",
      "Slug": "sims4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 510,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 510,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 510,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 510,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 510,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 510,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 510,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 86,
          "GameId": 510,
          "IsRequired": true,
          "FileName": "TS4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 540,
      "Name": "7 Days to Die",
      "Slug": "7days",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 540,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 540,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 540,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 540,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 540,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 540,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 540,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 87,
          "GameId": 540,
          "IsRequired": true,
          "FileName": "7DaysToDie.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 541,
      "Name": "BioShock Infinite",
      "Slug": "bioshock-infinite",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 541,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 541,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 541,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 541,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 541,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 541,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 541,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 90,
          "GameId": 541,
          "IsRequired": true,
          "FileName": "BioShockInfinite.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 542,
      "Name": "Call of Duty Black Ops 2 Zombies",
      "Slug": "cod-blackops2-zombies",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 542,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 542,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 542,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 542,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 542,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 542,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 542,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 94,
          "GameId": 542,
          "IsRequired": true,
          "FileName": "t6zm.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 543,
      "Name": "Call of Duty Black Ops",
      "Slug": "cod-blackops",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 543,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 543,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 543,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 543,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 543,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 543,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 543,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 91,
          "GameId": 543,
          "IsRequired": true,
          "FileName": "BlackOps.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 92,
          "GameId": 543,
          "IsRequired": true,
          "FileName": "BlackOpsMP.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 545,
      "Name": "Chivalry",
      "Slug": "chivalry",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 545,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 545,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 545,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 545,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 545,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 545,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 545,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 95,
          "GameId": 545,
          "IsRequired": true,
          "FileName": "CMW.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 547,
      "Name": "Crusader Kings II",
      "Slug": "chivalry",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 547,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 547,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 547,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 547,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 547,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 547,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 547,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 96,
          "GameId": 547,
          "IsRequired": true,
          "FileName": "CK2game.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 548,
      "Name": "Dark Souls",
      "Slug": "dark-souls",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 548,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 548,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 548,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 548,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 548,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 548,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 548,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 97,
          "GameId": 548,
          "IsRequired": true,
          "FileName": "DARKSOULS.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 549,
      "Name": "Dark Souls 2",
      "Slug": "dark-souls2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 549,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 549,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 549,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 549,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 549,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 549,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 549,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 98,
          "GameId": 549,
          "IsRequired": true,
          "FileName": "DarkSoulsII.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 551,
      "Name": "DC Universe Online",
      "Slug": "dc-online",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 551,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 551,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 551,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 551,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 551,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 551,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 551,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 126,
          "GameId": 551,
          "IsRequired": true,
          "FileName": "DCGAME.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 552,
      "Name": "Defiance",
      "Slug": "defiance",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 552,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 552,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 552,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 552,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 552,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 552,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 552,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 99,
          "GameId": 552,
          "IsRequired": true,
          "FileName": "Defiance.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 553,
      "Name": "Distance",
      "Slug": "Distance",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 553,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 553,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 553,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 553,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 553,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 553,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 553,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 100,
          "GameId": 553,
          "IsRequired": true,
          "FileName": "Distance.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 554,
      "Name": "FTL",
      "Slug": "FTL",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 554,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 554,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 554,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 554,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 554,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 554,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 554,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 101,
          "GameId": 554,
          "IsRequired": true,
          "FileName": "FTLGame.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 555,
      "Name": "Goat Simulator",
      "Slug": "goat-simulator",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 555,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 555,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 555,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 555,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 555,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 555,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 555,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 102,
          "GameId": 555,
          "IsRequired": true,
          "FileName": "GoatGame-Win32-Shipping.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 556,
      "Name": "Grand Theft Auto IV",
      "Slug": "gta4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 556,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 556,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 556,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 556,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 556,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 556,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 556,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 103,
          "GameId": 556,
          "IsRequired": true,
          "FileName": "GTAIV.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 557,
      "Name": "GRID 2",
      "Slug": "grid2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 557,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 557,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 557,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 557,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 557,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 557,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 557,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 104,
          "GameId": 557,
          "IsRequired": true,
          "FileName": "GRID2.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 105,
          "GameId": 557,
          "IsRequired": true,
          "FileName": "GRID2_avx.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 559,
      "Name": "Killing Floor",
      "Slug": "killing-floor",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 559,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 559,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 559,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 559,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 559,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 559,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 559,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 107,
          "GameId": 559,
          "IsRequired": true,
          "FileName": "KillingFloor.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 560,
      "Name": "Marvel Heroes",
      "Slug": "marvel-heroes",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 560,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 560,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 560,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 560,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 560,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 560,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 560,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 109,
          "GameId": 560,
          "IsRequired": true,
          "FileName": "MarvelHeroes2015.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 561,
      "Name": "Medieval II: Total War",
      "Slug": "medieval2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 561,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 561,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 561,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 561,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 561,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 561,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 561,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 110,
          "GameId": 561,
          "IsRequired": true,
          "FileName": "medieval2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 562,
      "Name": "Oort Online",
      "Slug": "oortonline",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 562,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 562,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 562,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 562,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 562,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 562,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 562,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 111,
          "GameId": 562,
          "IsRequired": true,
          "FileName": "oortonline.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 563,
      "Name": "PlanetSide 2",
      "Slug": "ps2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 563,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 563,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 563,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 563,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 563,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 563,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 563,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 112,
          "GameId": 563,
          "IsRequired": true,
          "FileName": "PlanetSide2_x64.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 113,
          "GameId": 563,
          "IsRequired": true,
          "FileName": "PlanetSide2_x86.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 564,
      "Name": "Saints Row 3",
      "Slug": "saints-row3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 564,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 564,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 564,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 564,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 564,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 564,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 564,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 114,
          "GameId": 564,
          "IsRequired": true,
          "FileName": "SaintsRowTheThird.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 115,
          "GameId": 564,
          "IsRequired": true,
          "FileName": "SaintsRowTheThird_DX11.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 566,
      "Name": "Starbound",
      "Slug": "starbound",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 566,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 566,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 566,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 566,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 566,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 566,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 566,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 116,
          "GameId": 566,
          "IsRequired": true,
          "FileName": "starbound.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 117,
          "GameId": 566,
          "IsRequired": true,
          "FileName": "starbound_opengl.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 567,
      "Name": "Stronghold Kingdoms",
      "Slug": "stronghold-kingdoms",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 567,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 567,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 567,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 567,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 567,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 567,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 567,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 118,
          "GameId": 567,
          "IsRequired": true,
          "FileName": "StrongholdKingdoms.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 568,
      "Name": "Sunless Sea",
      "Slug": "sunless-sea",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 568,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 568,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 568,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 568,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 568,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 568,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 568,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 119,
          "GameId": 568,
          "IsRequired": true,
          "FileName": "Sunless Sea.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 569,
      "Name": "The Binding of Isaac",
      "Slug": "binding-isaac",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 569,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 569,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 569,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 569,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 569,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 569,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 569,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 120,
          "GameId": 569,
          "IsRequired": true,
          "FileName": "Binding_of_Isaac.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 121,
          "GameId": 569,
          "IsRequired": true,
          "FileName": "Isaac.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 570,
      "Name": "Total War: Shogun 2",
      "Slug": "shogun2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 570,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 570,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 570,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 570,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 570,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 570,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 570,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 122,
          "GameId": 570,
          "IsRequired": true,
          "FileName": "Shogun2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 571,
      "Name": "Warface",
      "Slug": "warface",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 571,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 571,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 571,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 571,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 571,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 571,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 571,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 127,
          "GameId": 571,
          "IsRequired": true,
          "FileName": "GAME.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 128,
          "GameId": 571,
          "IsRequired": true,
          "FileName": "GFSDK_GSA.win32.dll",
          "FileType": 1,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 572,
      "Name": "Wasteland 2",
      "Slug": "wl2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 572,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 572,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 572,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 572,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 572,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 572,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 572,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 124,
          "GameId": 572,
          "IsRequired": true,
          "FileName": "WL2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 604,
      "Name": "H1Z1",
      "Slug": "h1z1",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 604,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 604,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 604,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 604,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 604,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 604,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 604,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 130,
          "GameId": 604,
          "IsRequired": true,
          "FileName": "H1Z1.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 605,
      "Name": "Fractured Space",
      "Slug": "Fractured-Space",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 605,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 605,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 605,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 605,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 605,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 605,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 605,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 132,
          "GameId": 605,
          "IsRequired": true,
          "FileName": "spacegame-Win64-Shipping.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 606,
      "Name": "Brawlhalla",
      "Slug": "Brawlhalla",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 606,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 606,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 606,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 606,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 606,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 606,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 606,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 133,
          "GameId": 606,
          "IsRequired": true,
          "FileName": "Brawlhalla.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 607,
      "Name": "Grey Goo",
      "Slug": "grey-goo",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 607,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 607,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 607,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 607,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 607,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 607,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 607,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 134,
          "GameId": 607,
          "IsRequired": true,
          "FileName": "GooG.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 608,
      "Name": "Darkest Dungeon",
      "Slug": "darkest-dungeon",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 608,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 608,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 608,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 608,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 608,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 608,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 608,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 135,
          "GameId": 608,
          "IsRequired": true,
          "FileName": "Darkest.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 609,
      "Name": "Total War: ATTILA",
      "Slug": "totalwar-attila",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 609,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 609,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 609,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 609,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 609,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 609,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 609,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 136,
          "GameId": 609,
          "IsRequired": true,
          "FileName": "attila.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 610,
      "Name": "Besiege",
      "Slug": "besiege",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 610,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 610,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 610,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 610,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 610,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 610,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 610,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 137,
          "GameId": 610,
          "IsRequired": true,
          "FileName": "Besiege.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 611,
      "Name": "Reign of Kings",
      "Slug": "rok",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 611,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 611,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 611,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 611,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 611,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 611,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 611,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 138,
          "GameId": 611,
          "IsRequired": true,
          "FileName": "ROK.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 612,
      "Name": "Cities: Skylines",
      "Slug": "cities-skylines",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 612,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 612,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 612,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 612,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 612,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 612,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 612,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 139,
          "GameId": 612,
          "IsRequired": true,
          "FileName": "Cities.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 613,
      "Name": "World of Warships",
      "Slug": "warships",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 613,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 613,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 613,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 613,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 613,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 613,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 613,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 140,
          "GameId": 613,
          "IsRequired": true,
          "FileName": "WorldOfWarships.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 614,
      "Name": "Football Manager 2015",
      "Slug": "football2015",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 614,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 614,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 614,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 614,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 614,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 614,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 614,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 142,
          "GameId": 614,
          "IsRequired": true,
          "FileName": "FM2015.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 615,
      "Name": "Battlefield Hardline",
      "Slug": "bfh",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 615,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 615,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 615,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 615,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 615,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 615,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 615,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 143,
          "GameId": 615,
          "IsRequired": true,
          "FileName": "bfh.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 616,
      "Name": "Pillars of Eternity",
      "Slug": "pillars",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 616,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 616,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 616,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 616,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 616,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 616,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 616,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 144,
          "GameId": 616,
          "IsRequired": true,
          "FileName": "PillarsOfEternity.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 618,
      "Name": "Magicka: Wizard Wars",
      "Slug": "magicka-wizard-wars",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 618,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 618,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 618,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 618,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 618,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 618,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 618,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 146,
          "GameId": 618,
          "IsRequired": true,
          "FileName": "bitsquid_win32_dev.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 620,
      "Name": "Magicka 2",
      "Slug": "magicka2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 620,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 620,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 620,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 620,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 620,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 620,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 620,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 147,
          "GameId": 620,
          "IsRequired": true,
          "FileName": "Magicka2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 621,
      "Name": "Witcher 3",
      "Slug": "witcher3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 621,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 621,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 621,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 621,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 621,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 621,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 621,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 148,
          "GameId": 621,
          "IsRequired": true,
          "FileName": "witcher3.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 622,
      "Name": "Clicker Heroes",
      "Slug": "clicker-heroes",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 622,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 622,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 622,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 622,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 622,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 622,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 622,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 162,
          "GameId": 622,
          "IsRequired": true,
          "FileName": "Clicker Heroes.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 623,
      "Name": "ARK: Survival Evolved",
      "Slug": "ark",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 623,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 623,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 623,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 623,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 623,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 623,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 623,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 159,
          "GameId": 623,
          "IsRequired": true,
          "FileName": "ShooterGame.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 625,
      "Name": "LEGO Worlds",
      "Slug": "lego-worlds",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 625,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 625,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 625,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 625,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 625,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 625,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 625,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 160,
          "GameId": 625,
          "IsRequired": true,
          "FileName": "LEGO_Worlds.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 626,
      "Name": "Rebuild 3: Gangs of Deadsville",
      "Slug": "rebuild3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 626,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 626,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 626,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 626,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 626,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 626,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 626,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 164,
          "GameId": 626,
          "IsRequired": true,
          "FileName": "Rebuild3.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 627,
      "Name": "Galactic Civilizations 3",
      "Slug": "galciv3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 627,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 627,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 627,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 627,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 627,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 627,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 627,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 161,
          "GameId": 627,
          "IsRequired": true,
          "FileName": "GalCiv3.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 628,
      "Name": "Killing Floor 2",
      "Slug": "kf2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 628,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 628,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 628,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 628,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 628,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 628,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 628,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 163,
          "GameId": 628,
          "IsRequired": true,
          "FileName": "KFGame.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 629,
      "Name": "AdVenture Capitalist",
      "Slug": "adventure-capitalist",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 629,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 629,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 629,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 629,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 629,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 629,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 629,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 165,
          "GameId": 629,
          "IsRequired": true,
          "FileName": "adventure-capitalist.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 631,
      "Name": "Dirty Bomb",
      "Slug": "dirty-bomb",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 631,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 631,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 631,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 631,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 631,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 631,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 631,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 152,
          "GameId": 631,
          "IsRequired": true,
          "FileName": "ShooterGame-Win32-Shipping.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 632,
      "Name": "Rocket League",
      "Slug": "rocket-league",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 632,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 632,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 632,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 632,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 632,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 632,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 632,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 166,
          "GameId": 632,
          "IsRequired": true,
          "FileName": "RocketLeague.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 633,
      "Name": "Trove",
      "Slug": "trove",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 633,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 633,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 633,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 633,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 633,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 633,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 633,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 168,
          "GameId": 633,
          "IsRequired": true,
          "FileName": "Trove.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 634,
      "Name": "Osu!",
      "Slug": "osu",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 634,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 634,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 634,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 634,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 634,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 634,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 634,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 170,
          "GameId": 634,
          "IsRequired": true,
          "FileName": "osu!.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 635,
      "Name": "Skyforge",
      "Slug": "skyforge",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 635,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 635,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 635,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 635,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 635,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 635,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 635,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 169,
          "GameId": 635,
          "IsRequired": true,
          "FileName": "Skyforge.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 636,
      "Name": "Awesomenauts",
      "Slug": "awesomenauts",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 636,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 636,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 636,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 636,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 636,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 636,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 636,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 171,
          "GameId": 636,
          "IsRequired": true,
          "FileName": "Awesomenauts.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 637,
      "Name": "Empyrion - Galactic Survival",
      "Slug": "empyrion",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 637,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 637,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 637,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 637,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 637,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 637,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 637,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 172,
          "GameId": 637,
          "IsRequired": true,
          "FileName": "Empyrion.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 638,
      "Name": "Mad Max",
      "Slug": "mad-max",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 638,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 638,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 638,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 638,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 638,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 638,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 638,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 173,
          "GameId": 638,
          "IsRequired": true,
          "FileName": "MadMax.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 639,
      "Name": "METAL GEAR SOLID V: THE PHANTOM PAIN",
      "Slug": "msgv",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 639,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 639,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 639,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 639,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 639,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 639,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 639,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 174,
          "GameId": 639,
          "IsRequired": true,
          "FileName": "mgsvtpp.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 640,
      "Name": "Rainbow Six Siege",
      "Slug": "rainbow6siege",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 640,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 640,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 640,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 640,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 640,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 640,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 640,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 205,
          "GameId": 640,
          "IsRequired": true,
          "FileName": "RainbowSixGame.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 641,
      "Name": "Star Wars Battlefront",
      "Slug": "battlefront",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 641,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 641,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 641,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 641,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 641,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 641,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 641,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 180,
          "GameId": 641,
          "IsRequired": true,
          "FileName": "starwarsbattlefront.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 643,
      "Name": "Total War: Arena",
      "Slug": "total-war-arena",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 643,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 643,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 643,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 643,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 643,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 643,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 643,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 175,
          "GameId": 643,
          "IsRequired": true,
          "FileName": "Arena.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 644,
      "Name": "Overwatch",
      "Slug": "overwatch",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 644,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 644,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 644,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 644,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 644,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 644,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 644,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 178,
          "GameId": 644,
          "IsRequired": true,
          "FileName": "Overwatch.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 645,
      "Name": "Battle Battalions",
      "Slug": "battle-battalions",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 645,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 645,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 645,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 645,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 645,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 645,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 645,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 179,
          "GameId": 645,
          "IsRequired": true,
          "FileName": "BattleBattalionsRS.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 646,
      "Name": "Fallout 4",
      "Slug": "fallout4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 646,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 646,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 646,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 646,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 646,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 646,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 646,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 182,
          "GameId": 646,
          "IsRequired": true,
          "FileName": "Fallout4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 647,
      "Name": "Paladins",
      "Slug": "paladins",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 647,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 647,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 647,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 647,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 647,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 647,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 647,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 181,
          "GameId": 647,
          "IsRequired": true,
          "FileName": "Paladins.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 648,
      "Name": "The Division",
      "Slug": "the-division",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 648,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 648,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 648,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 648,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 648,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 648,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 648,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 183,
          "GameId": 648,
          "IsRequired": true,
          "FileName": "thedivision.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 649,
      "Name": "Paragon",
      "Slug": "paragon",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 649,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 649,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 649,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 649,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 649,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 649,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 649,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 197,
          "GameId": 649,
          "IsRequired": true,
          "FileName": "OrionClient-Win64-Shipping.exe",
          "FileType": 2,
          "PlatformType": 3
        },
        {
          "Id": 198,
          "GameId": 649,
          "IsRequired": true,
          "FileName": "OrionClient-Win32-Shipping.exe",
          "FileType": 2,
          "PlatformType": 2
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 650,
      "Name": "Stellaris",
      "Slug": "stellaris",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 650,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 650,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 650,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 650,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 650,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 650,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 650,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 185,
          "GameId": 650,
          "IsRequired": true,
          "FileName": "stellaris.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 652,
      "Name": "Street Fighter V",
      "Slug": "sf-5",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 652,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 652,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 652,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 652,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 652,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 652,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 652,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 653,
      "Name": "Dark Souls 3",
      "Slug": "dark-souls-3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 653,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 653,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 653,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 653,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 653,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 653,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 653,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 253,
          "GameId": 653,
          "IsRequired": true,
          "FileName": "DarkSoulslll.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 654,
      "Name": "Total War: Warhammer",
      "Slug": "tw-warhammer",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 654,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 654,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 654,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 654,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 654,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 654,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 654,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 249,
          "GameId": 654,
          "IsRequired": true,
          "FileName": "Warhammer.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 655,
      "Name": "Call of Duty: Black Ops III",
      "Slug": "CoDBO3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 655,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 655,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 655,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 655,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 655,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 655,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 655,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 203,
          "GameId": 655,
          "IsRequired": true,
          "FileName": "BlackOps3.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 656,
      "Name": "FIFA 16",
      "Slug": "FIFA16",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 656,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 656,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 656,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 656,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 656,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 656,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 656,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 202,
          "GameId": 656,
          "IsRequired": true,
          "FileName": "fifa16.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 658,
      "Name": "Pantheon",
      "Slug": "pantheon",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 658,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 658,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 658,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 658,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 658,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 658,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 658,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 659,
      "Name": "Football Manager 2016",
      "Slug": "FM2016",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 659,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 659,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 659,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 659,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 659,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 659,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 659,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 235,
          "GameId": 659,
          "IsRequired": false,
          "FileName": "fm.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 237,
          "GameId": 659,
          "IsRequired": false,
          "FileName": "helper.x86",
          "FileType": 1,
          "PlatformType": 1
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 660,
      "Name": "Doom",
      "Slug": "Doom",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 660,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 660,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 660,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 660,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 660,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 660,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 660,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 212,
          "GameId": 660,
          "IsRequired": false,
          "FileName": "DOOMx64.exe",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 213,
          "GameId": 660,
          "IsRequired": false,
          "FileName": "DOOMx64vk.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 661,
      "Name": "Factorio",
      "Slug": "Factorio",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 661,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 661,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 661,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 661,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 661,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 661,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 661,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 234,
          "GameId": 661,
          "IsRequired": true,
          "FileName": "factorio.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 662,
      "Name": "Portal",
      "Slug": "Portal",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 662,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 662,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 662,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 662,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 662,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 662,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 662,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 251,
          "GameId": 662,
          "IsRequired": false,
          "FileName": "portal\\portal_pak_000.vpk",
          "FileType": 1,
          "PlatformType": 1
        },
        {
          "Id": 252,
          "GameId": 662,
          "IsRequired": false,
          "FileName": "hl2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 663,
      "Name": "Portal 2",
      "Slug": "Portal2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 663,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 663,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 663,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 663,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 663,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 663,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 663,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 219,
          "GameId": 663,
          "IsRequired": true,
          "FileName": "portal2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 664,
      "Name": "NBA 2k16",
      "Slug": "NBA2k16",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 664,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 664,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 664,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 664,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 664,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 664,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 664,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 243,
          "GameId": 664,
          "IsRequired": true,
          "FileName": "NBA2K16.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 665,
      "Name": "Hearts of Iron IV",
      "Slug": "HoIIV",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 665,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 665,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 665,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 665,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 665,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 665,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 665,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 238,
          "GameId": 665,
          "IsRequired": true,
          "FileName": "hoi4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 666,
      "Name": "Dead by Daylight",
      "Slug": "DeadByDaylight",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 666,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 666,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 666,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 666,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 666,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 666,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 666,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 229,
          "GameId": 666,
          "IsRequired": true,
          "FileName": "DeadByDaylight-Win64-Shipping.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 667,
      "Name": "Tree of Savior",
      "Slug": "TreeOfSavior",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 667,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 667,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 667,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 667,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 667,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 667,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 667,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 223,
          "GameId": 667,
          "IsRequired": true,
          "FileName": "Client_tos.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 668,
      "Name": "Europa Universalis IV",
      "Slug": "EUIV",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 668,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 668,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 668,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 668,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 668,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 668,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 668,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 216,
          "GameId": 668,
          "IsRequired": true,
          "FileName": "eu4.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 669,
      "Name": "Stardew Valley",
      "Slug": "StardewValley",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 669,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 669,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 669,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 669,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 669,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 669,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 669,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 222,
          "GameId": 669,
          "IsRequired": true,
          "FileName": "Stardew Valley.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 670,
      "Name": "Elite: Dangerous",
      "Slug": "EliteDangerous",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 670,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 670,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 670,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 670,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 670,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 670,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 670,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 214,
          "GameId": 670,
          "IsRequired": false,
          "FileName": "EliteDangerous64.exe",
          "FileType": 2,
          "PlatformType": 3
        },
        {
          "Id": 215,
          "GameId": 670,
          "IsRequired": false,
          "FileName": "EliteDangerous32.exe",
          "FileType": 2,
          "PlatformType": 2
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 671,
      "Name": "ShellShock Live",
      "Slug": "ShellShockLive",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 671,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 671,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 671,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 671,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 671,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 671,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 671,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 246,
          "GameId": 671,
          "IsRequired": true,
          "FileName": "ShellShockLive.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 672,
      "Name": "Undertale",
      "Slug": "Undertale",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 672,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 672,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 672,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 672,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 672,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 672,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 672,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 247,
          "GameId": 672,
          "IsRequired": true,
          "FileName": "UNDERTALE.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 673,
      "Name": "Hurtworld",
      "Slug": "Hurtworld",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 673,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 673,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 673,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 673,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 673,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 673,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 673,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 239,
          "GameId": 673,
          "IsRequired": true,
          "FileName": "Hurtworldclient.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 674,
      "Name": "Don't Starve",
      "Slug": "DontStarve",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 674,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 674,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 674,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 674,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 674,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 674,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 674,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 230,
          "GameId": 674,
          "IsRequired": false,
          "FileName": "dontstarve_steam.exe ",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 233,
          "GameId": 674,
          "IsRequired": false,
          "FileName": "tier0_s.dll",
          "FileType": 1,
          "PlatformType": 1
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 675,
      "Name": "Don't Starve Together",
      "Slug": "DSTogether",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 675,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 675,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 675,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 675,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 675,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 675,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 675,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 231,
          "GameId": 675,
          "IsRequired": false,
          "FileName": "dontstarve_Steam",
          "FileType": 2,
          "PlatformType": 4
        },
        {
          "Id": 232,
          "GameId": 675,
          "IsRequired": false,
          "FileName": "dontstarve_dedicated_server_nullrenderer.exe",
          "FileType": 1,
          "PlatformType": 1
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 676,
      "Name": "Civilization IV",
      "Slug": "CivIV",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 676,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 676,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 676,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 676,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 676,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 676,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 676,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 221,
          "GameId": 676,
          "IsRequired": false,
          "FileName": "Civ4BeyondSword.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 677,
      "Name": "Civilization III",
      "Slug": "CivIII",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 677,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 677,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 677,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 677,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 677,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 677,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 677,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 220,
          "GameId": 677,
          "IsRequired": false,
          "FileName": "Civ3Conquest.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 678,
      "Name": "Insanity Clicker",
      "Slug": "InsanityClicker",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 678,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 678,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 678,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 678,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 678,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 678,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 678,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 217,
          "GameId": 678,
          "IsRequired": true,
          "FileName": "Insanity Clicker.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 679,
      "Name": "Remember Me",
      "Slug": "RememberMe",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 679,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 679,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 679,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 679,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 679,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 679,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 679,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 248,
          "GameId": 679,
          "IsRequired": true,
          "FileName": "RememberMe.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 680,
      "Name": "H1Z1: King of the Kill",
      "Slug": "H1Z1KotK",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 680,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 680,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 680,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 680,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 680,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 680,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 680,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 681,
      "Name": "Star Citizen",
      "Slug": "StarCitizen",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 681,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 681,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 681,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 681,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 681,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 681,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 681,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 201,
          "GameId": 681,
          "IsRequired": true,
          "FileName": "StarCitizen.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 682,
      "Name": "No Man's Sky",
      "Slug": "no-mans-sky",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 682,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 682,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 682,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 682,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 682,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 682,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 682,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 194,
          "GameId": 682,
          "IsRequired": true,
          "FileName": "NMS.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 11,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 687,
      "Name": "Battlefield 1",
      "Slug": "Battlefield1",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 687,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 687,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 687,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 687,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 687,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 687,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 687,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 208,
          "GameId": 687,
          "IsRequired": true,
          "FileName": "bf1.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 720,
      "Name": "Albion Online",
      "Slug": "albiononline",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 720,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 720,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 720,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 720,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 720,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 720,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 720,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 200,
          "GameId": 720,
          "IsRequired": true,
          "FileName": "Albion-Online.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 721,
      "Name": "Battlerite",
      "Slug": "battlerite",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 721,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 721,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 721,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 721,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 721,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 721,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 721,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 199,
          "GameId": 721,
          "IsRequired": true,
          "FileName": "Battlerite.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 722,
      "Name": "FIFA 17",
      "Slug": "FIFA17",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 722,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 722,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 722,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 722,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 722,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 722,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 722,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 206,
          "GameId": 722,
          "IsRequired": true,
          "FileName": "FIFA17.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 724,
      "Name": "Breakaway",
      "Slug": "breakaway",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 724,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 724,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 724,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 724,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 724,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 724,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 724,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 211,
          "GameId": 724,
          "IsRequired": true,
          "FileName": "Relay_x64.exe ",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 725,
      "Name": "Streamline",
      "Slug": "streamline",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 725,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 725,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 725,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 725,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 725,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 725,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 725,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 726,
      "Name": "Gears of War 4",
      "Slug": "Gears4",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 726,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 726,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 726,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 726,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 726,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 726,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 726,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 727,
      "Name": "Civilization VI",
      "Slug": "Civ6",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 727,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 727,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 727,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 727,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 727,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 727,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 727,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 210,
          "GameId": 727,
          "IsRequired": true,
          "FileName": "CivilizationVI.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 728,
      "Name": "Watchdogs",
      "Slug": "watchdogs",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 728,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 728,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 728,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 728,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 728,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 728,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 728,
          "Name": "Background"
        }
      ],
      "GameFiles": [],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": false,
      "BundleAssets": false
    },
    {
      "ID": 729,
      "Name": "Watchdogs 2",
      "Slug": "watchdogs2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 729,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 729,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 729,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 729,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 729,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 729,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 729,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 227,
          "GameId": 729,
          "IsRequired": true,
          "FileName": "Watchdogs2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 730,
      "Name": "Shadow Warrior 2",
      "Slug": "shadowwar2",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 730,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 730,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 730,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 730,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 730,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 730,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 730,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 244,
          "GameId": 730,
          "IsRequired": true,
          "FileName": "ShadowWarrior2.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 731,
      "Name": "Mafia III",
      "Slug": "mafia3",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 731,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 731,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 731,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 731,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 731,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 731,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 731,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 240,
          "GameId": 731,
          "IsRequired": true,
          "FileName": "mafia3.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 732,
      "Name": "Planet Coaster",
      "Slug": "planetcoaster",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 732,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 732,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 732,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 732,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 732,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 732,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 732,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 226,
          "GameId": 732,
          "IsRequired": true,
          "FileName": "PlanetCoaster.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 733,
      "Name": "Football Manager 2017",
      "Slug": "FM2017",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 733,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 733,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 733,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 733,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 733,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 733,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 733,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 241,
          "GameId": 733,
          "IsRequired": false,
          "FileName": "icudt57.dll",
          "FileType": 1,
          "PlatformType": 1
        },
        {
          "Id": 242,
          "GameId": 733,
          "IsRequired": false,
          "FileName": "fm.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 734,
      "Name": "NBA 2k17",
      "Slug": "NBA2k17",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 734,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 734,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 734,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 734,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 734,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 734,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 734,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 250,
          "GameId": 734,
          "IsRequired": true,
          "FileName": "NBA2K17.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 735,
      "Name": "Astroneer",
      "Slug": "astroneer",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 735,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 735,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 735,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 735,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 735,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 735,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 735,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 254,
          "GameId": 735,
          "IsRequired": true,
          "FileName": "Astro-Win64-Shipping.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    },
    {
      "ID": 4402,
      "Name": "Tyranny",
      "Slug": "tyranny",
      "DateModified": "0001-01-01T00:00:00",
      "Assets": [
        {
          "Id": 31,
          "GameId": 4402,
          "Name": "Cover"
        },
        {
          "Id": 33,
          "GameId": 4402,
          "Name": "Icon16"
        },
        {
          "Id": 34,
          "GameId": 4402,
          "Name": "Icon24"
        },
        {
          "Id": 35,
          "GameId": 4402,
          "Name": "Icon32"
        },
        {
          "Id": 36,
          "GameId": 4402,
          "Name": "Logo"
        },
        {
          "Id": 37,
          "GameId": 4402,
          "Name": "CoverLogo"
        },
        {
          "Id": 38,
          "GameId": 4402,
          "Name": "Background"
        }
      ],
      "GameFiles": [
        {
          "Id": 255,
          "GameId": 4402,
          "IsRequired": true,
          "FileName": "Tyranny.exe",
          "FileType": 2,
          "PlatformType": 4
        }
      ],
      "GameDetectionHints": [],
      "FileParsingRules": [],
      "CategorySections": [],
      "MaxFreeStorage": 0,
      "MaxPremiumStorage": 0,
      "MaxFileSize": 0,
      "SupportsAddons": false,
      "SupportsVoice": false,
      "Order": 0,
      "SupportsNotifications": true,
      "BundleAssets": false
    }
  ];
