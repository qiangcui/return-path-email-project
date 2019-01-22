Note: This project was developed by Qiang (Paul) Cui.

## How To Run Application?

1. Please pull the repository by typing ```git clone https://gitlab.com/qiangcui/return-path-email-project.git``` in the terminal.

2. Make sure you installed docker and docker-compose in your work station.

3. Please open the terminal and type ```docker login``` and put your docker hub username and password correctly and log in successfully.

4. If your work station is PC, please type ```ipconfig``` in cmd terminal and find out the ip address of your work station.

5. If your work station is Mac/Linux, please types ```ifconfig``` in terminal and find out the ip address of your work station.

6. Go to client/package.json file and open it.

7. Change the old ip address in the proxy section with your ip address - ```"proxy": "http://{Put your ip address here}:1234".```

8. Open the terminal and jump to root directory where the docker-compose file is located at.

9. Run ```docker-compose up --build``` in terminal.

10. In Chrome Browser, type ```localhost:3000``` and see the home page.

11. Upload the files with .msg extension and click upload button.

