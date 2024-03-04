# Youtube-Dev-Resources
Videos on YouTube that will help you on your development journey.

## ⚒️ Languages:

<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />

## 🖥️ Live Site:

Live site can be found <a href="https://bsodoge.github.io/Youtube-Dev-Resources/">here.</a>

## 📹 Add a video that has helped you:

 1. Fork this repository:

- Go to this <a href="https://github.com/Bsodoge/Youtube-Dev-Resources">repository's page</a> and click the "Fork" button near the top right of your screen.

 2. Create a new branch: 

    **Terminal Method**

    - Clone your fork by using a development-ready environment, which has git installed. (git clone https://github.com/user/fork -b branch path/to/repo)
    - Then, checkout your branch, using ```git checkout -b <branch name>```
    - Add your changes, and commit accordingly, and push to your fork!
    - Then make a pull-request, and wait for the owner of the repo to review and merge your changes.

    **Browser Method**

    - Go to your fork and click the grey `main` button in the upper left dropdown menu.
    - Enter the name of your new branch, branch names should have something to do with the change you are making, for example ```add-video```.
    - Click on ```Create branch <your-branch-name>```, this will take you to your new branch.

3. Adding your video:

    **Terminal Method**
    
    - Navigate to videos.json.
    - Copy this format and paste it into videos.json, make sure to not include more than 3 tags.
    ```
    {
        "url" : "<Youtube url here>",
        "title" : "<Title of your video here>",
        "tags" : [
            "<tag 1>",
            "<tag 2>",
            "<tag 3>"
        ]
    }
    ```
    - Add your changes by using ```git add videos.json```.
    - Commit your changes by using ```git commit -m "<commit msg goes here>"```.
    - Push your changes by using ```git push -u origin <your-branch-name>```.

    **Browser Method**

    - Navigate to videos.json.
    - On the top right of the JSON file, click on the pencil icon to edit the file.
    - Paste this code into the videos.json, make sure not to include more than 3 tags.
     ```
    {
        "url" : "<Youtube url here>",
        "title" : "<Title of your video here>",
        "tags" : [
            "<tag 1>",
            "<tag 2>",
            "<tag 3>"
        ]
    }
    ```
    - After editing the videos.json, add a commit message and click on the green button saying "Commit Changes". Make sure you have selected the branch you have created.

4. Raise a pull request:

    - Go back to your fork and click the `Compare and pull request` button.
    - Fill out the information and press the `Create pull request` button.

## 💪 Contributors:

A huge thank you to everyone who has contributed to this project!

[![Contributors](https://contrib.rocks/image?repo=Bsodoge/Youtube-Dev-Resources)](https://github.com/Bsodoge/Youtube-Dev-Resources/graphs/contributors)


Make sure to leave this project a star 🌟.

