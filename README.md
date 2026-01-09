# disk-scanner-viewer

Welcome to disk scanner viewer repo! The front-end web application for viewing and managing your disks. This is intended to work for local host/network (once the project is finished).

Current state:

* In-progress (will take some time)

Initial tech stack should include:

* Astro + React (front-end)
* Rust + Actix-web (back-end, different repo) (also I want to get more experience with rust)
* Postgresql (database for storing logs and changes)

Idea of the project:

* Front-end should show you a cloud-like view for your disks (at least the ones coming from the back-end) with detailed descriptions such as device using the disk, disk type, total space, consumed space, available space, current partitions, largest file (maybe), largest folder (maybe), etc...
* Back-end does the heavy lifting. Does disk scans via API request (as long as it has access, probably requires admin access for full scan), view scanned files, view scanned sectors, view scanned blocks, repair sectors.
* Database as a log system + backup in case something happens. This is optional, but it should save all actions happening on the drive (files added, deleted, modified). Saves driver logs (normal + error logs), and all files/important files in case something gets corrupted.

Purpose

I want to provide an easier way to understand your devices. An easier method to accessing everything through one interface. An easier way to monitor the health of your storage devices. A way to make better decisions. And most importantly, open-source :).

But most importantly, this is a journey to understand one aspect of computers and I believe one of the most crucial systems that if without it, we would probably still be storing information using punch cards or using papers often, haha.
