# Super Tiny Node App

![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiZk5MUXR6aGxiOHBMZXdqYzRxcGdOdkQvYkVFYVhWMFRHeGtpTmFjVitkNFNKemlLRWVzVUtOSExlVkZodVBSVUZlQWlVL3RDSEFJVXhxT2YzRzRlQStvPSIsIml2UGFyYW1ldGVyU3BlYyI6IjgwVlNmY1hHcDlqUjRBL0YiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

## Stick it in CodeCommit

```bash
ssh-keygen
// ~/.ssh/aws_codecommit
pbcopy < ~/.ssh/aws_codecommit.pub
```

Add the public key to your IAM user.

Edit ssh config to say

```
Host git-codecommit.*.amazonaws.com
  User APKAEIBAERJR2EXAMPLE
  IdentityFile ~/.ssh/aws_codecommit
```

Then run

```
chmod 600 config
```

```
ssh git-codecommit.us-east-2.amazonaws.com
```

You should then see:
>`You have successfully authenticated over SSH. You can use Git to interact with AWS CodeCommit.`

Now you can configure your origin and push

```
git remote add origin ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/dw-dddsm
```

## Build it on push

On build we want to

* `npm install`
* `npm test`

Manually create a build project in CodeBuild

It's all in docker
