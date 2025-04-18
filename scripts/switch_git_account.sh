#!/bin/bash

if [ "$1" == "work" ]; then
    git config --global user.name "이름"
    git config --global user.email "이메일"
    git config --global core.sshCommand "ssh -i ~/.ssh/id_rsa_work"
    echo "Switched to Work Account"
elif [ "$1" == "my" ]; then
    git config --global user.name "이름"
    git config --global user.email "이메일"
    git config --global core.sshCommand "ssh -i ~/.ssh/id_rsa_my"
    echo "Switched to My Account"
else
    echo "Usage: $0 [work|my]"
fi

# ./switch_git_account.sh work
# ./switch_git_account.sh my
