#!/bin/bash
mkdir "$1_src"
mkdir "$1_build"
cd "$1_src"
unzip "../$1.docx"
localTimes=1
while [ $localTimes -le $2 ] ; do
	deno run --allow-read --allow-write ../random_rewrite.js
	rm -rf "../$1_build/$1_$localTimes.docx"
	zip -r9 "../$1_build/$1_$localTimes.docx" ./* > /dev/null && echo "Done."
	localTimes=$(($localTimes+1))
done
rm -rf "../$1_src"
exit
