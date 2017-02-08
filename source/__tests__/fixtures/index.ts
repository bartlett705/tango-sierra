import { GamesState } from '../../state/GamesState';
import { gamesData } from './gamesDataFixture';

export const initialStateFixture = {
        games: [],
        isFetching: false,
        isError: false,
        detailIndex: null,
        progress: 0,
} as GamesState;

export const gamesDataFixture = gamesData;

export const gameData = {
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
};
