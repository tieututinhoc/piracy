---
sidebar: auto
permalink: /wiki/faq/
tags:
  - guide
  - help
  - getting
  - started
  - how to
  - what is
  - faq
---

# Frequently Asked Questions

This is a slightly edited version the [r/piracy faq page](https://www.reddit.com/r/piracy/wiki/faq).

## General questions

> What are some Preliminary measures to take to avoid running malware-infected files (in regards to non-software)

[Browsing and downloading guide](https://www.reddit.com/r/Piracy/wiki/browsing_and_downloading_guide)

> [How do I download and activate windows 10 (including LTSC/LTSB)? How do I upgrade to windows 10 from a prior pirated windows version?](https://www.reddit.com/r/Piracy/wiki/win10upgrade_activation)

> Can I receive updates on my now-activated windows 10 PC as normal? Will it break the activation?

Yes you can and it won't break the activation.

> I want to disable updates just in case, how do I do this?

Don't do this. You need security updates.

> I have Win 10 Home. How do I upgrade to the Pro version?

Simply use [hwidgen](https://reddit.com/r/piracy/wiki/megathread/tools)'s `license switch` function: <https://i.imgur.com/lmjLOtq.jpg>

> [What is a private tracker and how do I get started? Benefits of private trackers, etc.](https://www.reddit.com/r/Piracy/wiki/guides/private_trackers)

> [What is usenet and how do I get started? - /r/usenet wiki](https://www.reddit.com/r/usenet/wiki/index)

> What is "The Scene" and where do they upload their releases? e.g. Groups such as (Movies & TV) SPARKS, AMIABLE, PSYCHD, ROVERS, GECKOS, VENUE, LOST, SHORTBREHD, etc. (Games) CODEX, SKIDROW, CPY, RELOADED, etc.

They upload to private FTPs. You will never have access to them.

- [Short, concise, and simplistic explanation of what "The Scene" is](https://www.reddit.com/r/Piracy/comments/32isgo/noobpirate_what_is_a_scene_cracktorrent/) - Reddit thread

- [What is the difference between "The Scene" and p2p?](https://www.reddit.com/r/Piracy/comments/b0c0ns/difference_between_the_scene_and_p2p/) - Reddit thread. Outdated, but the idea is the same.

- [Warez Scene](https://en.wikipedia.org/wiki/Warez_scene) - Wikipedia

> What are services like All-Debrid, premiumizeMe, real-debrid used for?

As a standalone service, they will download things for you to later download from them at full speed. They are useful for file hosts which limit your download speeds unless you subscribe to their service. It can be used with torrents too, so their servers will do the downloading to prevent your IP from ever hitting the torrent swarm (which is the cause of copyright infringement complaints). You then download the content from their servers directly.
They keep the downloads in their servers for a while, for as long as people are trying to grab content from a particular link. So in conjunction with streaming apps that support real debrid, it works as a caching service, so that you can stream the popular links at full speed from real debrid as opposed to streaming directly from the slow file hosts.

## Legal Questions

_The following is not meant to be an in-depth explanation of the logistics involved in relationships between internet service providers and copyright parties, but rather a simple overview of answers to common inquiries regarding piracy and the importance of privacy._

> Will I receive a letter/complaint from my ISP for downloading `X` or browsing a pirate site?

Browsing a pirate website will not get you in any sort of trouble by your ISP.

In regards to downloading, it depends on the country in which you live, but this guide is mainly intended for USA/Canada-based users since that is reddit's primary userbase. Countries like Germany will hit you with a sizeable fine if you are caught pirating, so stay away from torrents completely if you live there.

If you are downloading via torrents (ie. Torrenting, through the use of a bittorrent client or other torrent-based application like Popcorn Time, or Showbox -- To disable torrent functionality from Showbox, look through its settings), then yes, you will be caught. Being part of a torrent swarm at all means you are at risk of getting a copyright notice.

Otherwise, downloading through other means, such as direct downloads/DDL (which would be done directly via your browser), would not get you caught. DDL is a blanket term used for any sort of direct connection between you and a single other server. Such transfers could take the form of HTTP, FTP, etc.

Downloading a `.torrent` file does not classify as torrenting. Browsing a torrent site also will not trigger complaints from your ISP. Continue reading below for an explanation.

> How does my ISP know what I am downloading?

ISPs are not the ones who monitor your downloading habits for the purpose of punishing you -- An ISP would not have any stake in trying to bust their users for acts of piracy on their own accord. If an ISP cared about your piracy habits, they would simply block access to pirate websites instead of constantly monitoring their users for acts of piracy. The blame lies with copyright trolls, parties that monitor the distribution of copyrighted material and use "mass copyright litigation to extract settlements from individuals". The only type of piracy that these groups can monitor are torrents since the technology is inherently open -- a torrent tracker will broadcast the IPs of the peers who are present in that swarm to the other peers, as a means of reporting which pieces of the file(s) each peer has for the purpose of distribution (ie. user A has piece `x` and user B is missing piece `x`, therefore user A will now upload to user B). As a result, copyright trolls can easily join a swarm and log all of the IPs present in that swarm. These groups will then complain to the ISPs who own the IPs they logged, and in turn, the ISPs are expected forward the complaint to the account holder but in most cases, the ISP is not obligated to share the personal details of the account holder to the copyright protection group and will only forward their complaints and threaten to shut off your internet, while other times they merely serve as an educational warning. In some countries, like Germany, you are liable to be fined a hefty sum of money for copyright infringement.

When you download from a web server, on which the only peers involved are you and the server (as opposed to torrenting, where there are many peers), then only you and the server operator will know what is being downloaded if the server is SSL encrypted (when visiting a webpage, SSL encryption is denoted by https in the URL, as opposed to just http). If your connection to the server is not SSL encrypted, then your ISP can easily know what is being downloaded. They won't do this, however, as they have no reason to, ISPs are not responsible for monitoring the downloading of pirated material.

> Am I less likely to receive a copyright complaint from my ISP if I don't upload?

The "uploading is illegal, downloading is not" reasoning most people give for why only torrents get you caught is a myth. Downloading copyrighted content is still illegal, though uploading (sharing) of copyrighted content is a more serious act. However, this doesn't mean that uploading is the sole culprit in receiving complaints from your ISP -- joining a torrent swarm at all will mean that your IP is liable to be logged and reported by copyright trolls. Even if uploading was the sole culprit for receiving copyright complaints, setting a ratio limit of 0 in your torrent client would do nothing to prevent copyright complaints, since torrents will naturally attempt to upload to other peers at any point during the download process and no torrent client in existence allows users to limit their upload speed to 0. If DDLs could be as easily monitored as torrent swarms, you would be getting copyright infringement complaints concerning their use as well.

> How can I avoid getting copyright infringement complaints?

You have several options:

- If you're going to download via torrents, use a VPN. A VPN creates a secure network connection over a public network such as the internet and encrypts your traffic. Your ISP will continue to know that you are consuming bandwidth, but to their eyes, your traffic will be encrypted. Your real IP will be hidden, so any server/network you connect to will only see your VPN's assigned IP address. A paid VPN is recommended, as there are no good free ones -- such free VPNs will likely collect data from you, be too slow to bother with, or do not allow torrent traffic in the first place. Many VPNs can be as cheap as 3 USD/month, if you buy in bulk.

  VPNs are not infallible, however, as your connection to them may sometimes fail. That is why some VPN providers offer a 'killswitch' function, which will disable all network activity on your computer if your connection to the VPN drops. If your VPN provider does not offer such functionality, you may consider switching to a torrent client that offers an in-built killswitch, like qBittorrent [(Here is a guide on how to accomplish this)](https://www.ghacks.net/2016/03/23/qbittorrent-block-transfers-vpn-disconnect/).

  **Note:**

  1. Also keep in mind that some websites will throw a fit if you are connected to a VPN. Connecting to netflix will fail if you are behind a VPN; your banking institutions, including paypal, will raise a flag on your account and likely lock it due to suspicious login activity.

  2. qBitorrent has a setting called anonymous mode. It can cause many connectivity issues, essentially killing your ability to connect to peers: [[Reddit thread] qBittorrent has a "Anonymous Mode" ... Is this at a beneficial if I'm already using a VPN?](https://web.archive.org/web/20140128050529/http://www.reddit.com/r/torrents/comments/1vqt9b/qbittorrent_has_a_anonymous_mode_which_as_i)

  3. Many torrent clients offer a `force encryption` option. This does not hide your IP from the torrent swarm. It only attempts to mask your torrenting activity from your ISP, such that they do not become aware that you are transferring data through torrents. This setting aims to prevent ISPs from throttling your torrent transfers. Your IP will still be entered into the swarm, and any anti-piracy suit who chooses to enter the swarm can do so easily and log all other IPs present. It is not a substitute for a VPN.

- Rent a seedbox. A seedbox is a remote server that is set up with torrenting in mind -- the server will handle all torrenting so your own IP will never have a chance of entering any torrent swarm. Once the server completes the torrent, you can download the content to your own computer through FTP or HTTP(S), both different types of direct downloads. It is extremely unlikely for your ISP to monitor your FTP transfers. Regardless, your seedbox provider should offer SSH access (your data transfers will be encrypted) if you are worried about your ISP snooping in on your data transfers.

- Using a private tracker in conjunction with either of the above solutions is also advised. Copyright trolls go after low hanging fruit such as public trackers (thepiratebay, extratorrent, rarbg), which have millions of daily users and are therefore the prime target. By using a private tracker you are diminishing the likelihood of receiving an infringement letter, however, it is still not impossible.

- Download using DDL (direct download) methods. DDL is a blanket term used for any sort of direct connection between you and a single other server. Such transfers could take the form of HTTP, ftp, etc.

- Download from usenet. Check the [/r/usenet wiki](https://www.reddit.com/r/usenet/wiki) for more info. Usenet is especially great for Movie and TV content and many usenet providers will provide SSL-encrypted downloads, allowing for greater peace of mind.

For more information on VPNs, seedboxes, and private trackers, check out the following resources:

- [Discussion: Seedbox vs VPN?](https://www.reddit.com/r/TechnologyProTips/search?q=seedbox+vs+vpn&sort=relevance&t=all)

> I just got a letter/email from my ISP about copyright infringement, what happens now?

The repercussions for pirating content vary by country. What may just be a mere *educational warning* in one country, may lead to the suspension/termination of your internet service in another country. Your ISP may have outlined the repercussions in the letter/email you received. As an example, the UK-based ISPs, Sky and Virgin, deliver educational emails to copyright violators. Virgin is ambiguous about repurcissions whereas Sky has explicitly mentioned that violations will not result in service suspension. US-based ISPs are also likely to terminate your service if you get too many repeated complaints for copyright infringement -- [the number of warnings before termination of service is supposedly 6.](https://sg.news.yahoo.com/six-strikes-explained-us-readies-piracy-warning-system-145127585.html) For more information regarding repercussions, your letter/email most likely states it, if not, refer to your ISP's ToS.

Furthermore, you shouldn't worry about being prosecuted for downloading pirated material. When people speak of being prosecuted for distribution of copyrighted content, they refer to the parties that make the pirated material available to begin with, such as streaming/torrent/pirate site operators. There are cases where the average joe can get into legal trouble for distribution, and those are cases that are referred to as example cases. One such case would be streaming pirated material to your fanbase on twitch, where people know your face and likely know your full real name, and copyright holders would want to prosecute these personalities to make an example out of them. Simple, every-day acts of piracy are not prosecuted, as they do not have any worth to the copyright holders, example-wise or monetary-wise (they would lose more money in lawyer fees than they'd get from you in a settlement).

The typical response to a copyright infringement letter is to just ignore it, move on with your day and follow the above advice on preventing further notices. If your internet has been shut down by your ISP, call them and ask what you can do to restore service, but never admit fault. Again, keep in mind that different countries will have different laws regarding what the punishment should be. Certain countries like Germany will hit you with a sizable fine for copyright infringement. [Read this](https://www.reddit.com/r/Piracy/comments/fbf5so/fine_for_downloading_movie/) if you live in Germany and have received a fine.

> I got caught pirating and my ISP has instructed me to delete the pirated material from my hard drive. Should I?

No, you don't need to. Your ISP cannot tell what's on your hard drive or not. As long as you follow the above advice on preventing further copyright infringement notices, you should be all set.

> What VPN should I get?

A paid VPN is recommended, as there are no good free ones that allow torrent traffic, not to mention that most will mine data from you for marketing purposes. You should seek a VPN that does not store connection and usage logs. Within this subreddit and Reddit as a whole, you will find aggressive VPN marketing tactics by nearly all top popular VPN services. Do your own research. You will often encounter the suggestion to visit [That One Privacy Site](https://thatoneprivacysite.net/vpn-section/). Do not rely blindly on the chart and look up each individual VPN's ToS. Many VPNs offer trials and refunds, use these to your benefit when determining which VPN best suits your needs. Below are some good research material to start with:

- <https://torrentfreak.com/vpn-anonymous-review-160220/>

- <https://www.reddit.com/r/VPN/wiki/index>

- <https://www.reddit.com/r/Privacy/wiki/index>

- <https://www.eff.org/issues/copyright-trolls>

- <http://help.bittorrent.com/customer/portal/articles/178790-the-basics-of-bittorrent>

> [How to stay Anonymous](https://www.removeddit.com/r/torrents/comments/whg1n/how_to_stay_anonymous_a_guide/)

## Torrenting and VPN questions

> Which free VPN service is recommended for downloading torrents?

None. Free VPNs are likely to collect data from you for marketing purposes, be too slow to bother with, or do not allow torrent traffic in the first place. It's recommended to purchase a subscription of a VPN service - many can be as cheap as 3 USD/month, if you buy in bulk.

> How can I access websites that my ISP is blocking?

Some ISPs simply do blocking at the DNS level, so you'll need to change your DNS settings in your router's configuration. Some DNS services you can use are [Cloudflare](https://blog.cloudflare.com/announcing-1111/), [openDNS](https://www.opendns.com/), [DNS-Watch](https://dns.watch/). Google how to change your DNS settings for your specific router model (or simply brand, as their WEB GUIs don't typically change all that much between revisions). Enter the IPs that your new chosen DNS service provided you.
If changing your DNS service provider did not work, then you may use a VPN. [ProtonVPN](https://protonvpn.com/free-vpn) is a good, free, and privacy-oriented VPN service provider that you can use to access blocked sites.

> My torrent download speeds are hecking slow or stalled even though the torrent site is reporting a ton of seeders for that torrent. What do?

As a preliminary measure, check the website you got the torrent file from to see how many peers are in the swarm. If there is an equal amount of peers, or greater amount of peers, than seeders, it's only natural that your download speeds will be slow. You'll have to wait it out. If your torrent is stalled, right click on it and choose to re-announce yourself to the swarm.

Add [more trackers](https://github.com/ngosang/trackerslist/blob/master/trackers_best.txt) to your torrent. This will give you a chance to gain a larger swarm of peers/seeds who are sharing the same torrent.

Make sure you are connectable. In your torrent client's settings, find the setting listing the port that it uses for "incoming connections". Change the port number to one in [the range of 49152 - 65535](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Dynamic,_private_or_ephemeral_ports). Visit this [site](https://www.canyouseeme.org/) and enter the port number you changed it to and it'll tell you if you are reachable or not. If it shows you are not reachable, you'll need to whitelist the port number in your [windows firewall settings](https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html) and in your router settings. You'll need to google how to accomplish this, as it will depend on your router's model/brand.

If you are using a VPN, make sure you are using a VPN service that allows port forwarding. If they allow port forwarding, they will allow you to enable port forwarding via their control panel, either on their website or directly through their app. Choose to open a port from their control panel, and then change your torrent client's port for incoming connections to match that same port number. That should be it - You won't need to mess with your firewall or router settings afterwards.

## Downloading from websites

> How do I download audio/video from streaming websites like youtube? (Does not work with Premium Youtube Videos, as these are protected by Widevine DRM. No public tools available to decrypt the streams.)

With [Youtube-DL](https://ytdl-org.github.io/youtube-dl/index.html) (open-source command-line tool). Alternatively, you can use [Youtube-DLG.](https://mrs0m30n3.github.io/youtube-dl-gui/), which is a GUI for Youtube-DL

[JDownloader2](http://jdownloader.org/jdownloader2) also works well. Also allows you to add your login credentials in order to access premium-only content that your account has access to.

[Internet Download Manager](https://www.internetdownloadmanager.com/download.html) will do the job as well, though it is a premium application. Also allows you to add your login credentials in order to access premium-only content that your account has access to. Use the free trial, then when the trial is nearing its end, simply reset the trial [with this.](https://github.com/J2TEAM/idm-trial-reset)

You may also try out Video Download Helper extensions for your browser.

> How the heck do I use or install Youtube-DL?

[Guide](https://jcutrer.com/howto/how-to-install-youtube-dl-the-easy-way) on how to install it.

[List of commands](https://www.ostechnix.com/youtube-dl-tutorial-with-examples-for-beginners/) available with Youtube-DL.

[Example of use](https://streamable.com/p6152): type `cmd` into the navigation bar of windows explorer to open a terminal. If you have a video that needs a login to access, youtube-dl supports adding your credentials and uses your login to grab the video stream. Example usage: `youtube-dl -u "myusername" -p "mypassword" "myvideoURL"`

If using the `-u` and `-p` flags won't work for you, you can always input your cookies, which will contain your login session, for youtube-dl to use to download the content. Download the browser extension "cookies.txt", which will download your cookies (firefox link [here](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/), chrome link [here](https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg)). Then use the `--cookies` flag to pass in the downloaded cookies file to youtube-dl. Usage: `youtube-dl --cookies "/path/to/cookies" "myvideoURL"`

> How do I download from spotify?

You can't. There aren't any tools that can download the unencrypted spotify streams. The best method is to convert your Spotify playlist to a Deezer playlist, then download that via [Deezloader](https://www.reddit.com/r/DeezloadersIsBack). More sites/tools for music available in the [megathread](https://reddit.com/r/Piracy/wiki/megathread/music).

> How Do I download from streaming sites such as Netflix, Hulu, Disney+, etc?

You don't. The methods detailed above won't work on paid streaming sites such as netflix, hulu, disney+, etc. due to their implementation of the Widevine DRM to encrypt the video stream. Scene groups and p2p groups have obtained methods to crack Widevine-protected streams, but they are kept internal to these groups, due to the fact that public disclosure of these methods would cause the exploits to be patched.

> How do I download video from pan baidu?

<https://www.reddit.com/r/Piracy/comments/auhyxk/how_do_i_download_from_panbaidu/eovyg8g/?context=33>

## Movies & TV

> [Breakdown of video naming conventions, bitrate and quality. Also covered: converting mkv to mp4](https://www.reddit.com/r/Piracy/wiki/guides/video_quality_and_types_of_releases)

Related questions:

Why do file sizes of videos with the same resolution vary so much?

Which release do I get? Which is better?

> Why do some of my downloads have dull/darkened/washed out colors?

You downloaded a video with HDR metadata. You need an HDR-capable display to play it back properly, else you'll have to use a tone-mapping software such as madVR with a video player such as [MPC](https://github.com/clsid2/mpc-hc). [MPV](https://mpv.io/) includes tone-mapping by default.

> How long does it take for new movies to release on torrent sites in HD?

About 3 months following the theater date. Check <https://www.dvdsreleasedates.com/> for the digital release. The blu-ray/DVD follows 2 weeks later, but is usually leaked up to 2 weeks early from somewhere in the production chain, coinciding with the digital release. It is extremely rare for the digital to get leaked, so for all intents and purposes, the official digital release date *is* the pirate release date.

Some movies get an official early release in South Korea (typically 1-1.5 months following the theater release), offered as pay-per-view in hotels in mini personal theaters where they get screencapped. These are referred to as "Korsubs", due to the hardcoded korean subtitles, though the quality can be pretty bad. Further reading: [[Reddit Thread] Where do KorSubbed rips come from?](https://www.reddit.com/r/Piracy/comments/dvznas/where_does_the_korsub_rips_come_from/)

During the holiday season (Nov/Dec), [Screeners](<https://en.wikipedia.org/wiki/Screener_(promotional)>) get sent out to a select jury, which will be comprised of Academy members/critics, who are expected to review them and vote on the films that excel at specific categories. The recipients of these screeners will typically rip and send their copy of the screener to select pirate groups who will take charge in removing any and all embedded invisible watermarks in the video and release it publicly. These releases are also not very high quality.

Other forms of early releases come in the shape of CAM or TELESYNC releases. These are not high quality at all -- the telesync releases usually appearing on torrent sites are mislabeled and are simply cams. These are simply theater screens recorded with a mobile camera and are of terrible quality. These types of recordings come with a good deal of risk, however, so people only bother with movies that are in high demand, such that they can make money selling access or by plastering advertisements on the recording. New cam releases are typically found on general trackers, such as [1337x.to](https://1337x.to/).

> How long does it take for TV episodes to become available to pirate?

Depends on the popularity, ease of access, workload of the first person who gets it, fucks he gives about it, etc.

There is no way of telling when a show is released after it airs. Sometimes it's a couple hours or days, sometimes it's 5 minutes after it airs.

> Poem by [/u/d3str0yer](https://www.reddit.com/u/d3str0yer)

## Games

> Will I get banned from steam/origin/uplay/epic if i play a pirated game? No.

Related: Will I get banned from steam if I use the "Add a non-steam game to my library" function to add a pirated game? No.

> Are the game sites linked in the [megathread](https://www.reddit.com/r/Piracy/wiki/megathread) safe?

If you use general trackers that allow user uploading, you'll have to be careful, especially more so if you use a torrent search engine which will list as many publicly distributed torrent as possible. Otherwise, if you use the dedicated game websites listed under `Games`, then yes, they're safe. But that's exactly what a malware distributor would say...

> My game downloads are being flagged as malware by my antivirus.

That is the nature of cracked files. Not to say that you should trust every loon in a youtube video that says "it's a false positive, go ahead and install", but the sites listed in the [megathread](https://www.reddit.com/r/Piracy/wiki/megathread) listed under the `Games` section are safe to use as proper game cracks will yield few generic detections. If you have an adblocker and used the proper download link, you should be good to go. Browsing pirate sites without an adblocker will just yield adverts posing as download buttons, which will yield virus-infected downloads, so make sure you're not just clicking on the most vibrant-looking link.

> Fitgirl is packed with ViRuSes!?

Read above, [fitgirl's site](http://fitgirl-repacks.site/) is safe to use.

> Fitgirl's repacks are taking a hecking long time to install. Why?

Fitgirl's repacks are extremely compressed, so they'll take a long time to decompress and will take several hours to install, even on a beefy system. They are intended for people with *very* slow or data-capped internet, in order to give them a chance to download a game in a timely manner or without blowing through their data cap. If you have a strong internet connection, you should be opting to download the original scene releases rather than her repacks.

> How do I install a "cracked" game/software? I installed it but when I run it, the store page just pops up.

If your download yielded a set of rar files in parts (in a sequence of `.r00`, `.r01`, `.r02`, etc.), then simply find the non-numbered `.rar` file, right click on it, and click extract here. Example image: <https://i.imgur.com/WhaFCSu.jpg>. It will automatically extract and combine the data from all the other parts and yield a `.iso` file.

Installing from the`.iso` file requires you to "mount" it onto your system as a virtual disc. Windows 10 has this functionality built-in. Just right click on the `.iso` file, select properties, then choose to change the program that handles `.iso` files. Choose Windows Explorer, then just click OK.

After setting Windows Explorer as the default program for `.iso` files, simply double click on the `.iso` file to mount it. It will take you to the folder structure contained inside the `.iso` file, then just run the setup `.exe` file to install the game.

Default installations are usually for the base game without a crack, so you'll need to take steps to patch the game files with the crack files post-installation. Read below.

Codex installers will tend to be one-click installs and will have a checkbox that says `move patch files to installation directory`, so make sure that box is checked - that's all there is to it, the game will be cracked once the installation finishes (if you checked the aforementioned checkbox). Otherwise, read the `readme` file included in your download. It's usually an `.nfo` file, but they are just text files, just right click on it and choose edit to open it.

If for some strange reason there is no readme file, the common method for games is to just copy and paste the patch/crack files included with your download, to your game's installation folder under `C:\Program Files` or `C:\Program Files (x86)`. The crack files may sometimes be contained in a non-descript folder, usually just named after the release group, eg. `CODEX`.

> Can I transfer the save files from my cracked game install to my soon-to-be-purchased game install?

In some cases, save files that are sourced from an older version of a game may not work on a newer version, and since pirated games tend to be running on the version that the game originally released on, this may be the case for you. Otherwise, you just need to google what the save location is for your game. Naturally, you will find answers regarding the purchased version of the game, but you only need to find the save file's name and file extension. Afterwards, just install [Everything](https://www.voidtools.com/), a file indexer and browser program, to instantly search through your entire filesystem (upon install, you may have to wait a bit for it to index all your files). Then just search for the file extension to see where the save file might be in your system (since pirated game installs may store save files elsewhere than the legitimate version). To search for a file extension, type `*.extension`, depending on what the extension is for your game's save files.

> How can I play co-cop (LAN-play) with a friend of mine?

If the game does not use Steam Connect to find LAN players, you can use software such as [ZeroTier](https://www.zerotier.com/) or [PlayHide](https://playhide.eu/) to set up a self-hosted VPN solution for your friend to join and be able to see you in the game's co-op listing.
