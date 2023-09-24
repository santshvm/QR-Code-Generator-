# QR-Code-Generator-

A terminal-based application that generates QR codes for URLs and saves them as PNG files in the project directory. Easily create and store QR codes for links using this command-line tool

## Synopsis 

The QR Code Generator is a command-line application developed in Node.js that enables users to effortlessly generate QR codes for URLs. It provides a convenient and efficient way to create QR codes, allowing users to specify the URL they want to encode. The generated QR code image is saved in the project directory in PNG format, making it easily accessible for various use cases.

## Key Features:

-> Command-Line Interface (CLI): The application is designed to be user-friendly, with a command-line interface that guides users through the QR code generation process. Users can simply run the application and follow the prompts.

-> Custom URL Input: Users have the flexibility to input the URL they want to encode into the QR code. This feature caters to a wide range of use cases, including sharing website links and more.

-> File Output: The generated QR code is saved as a PNG image in the project directory. This output format ensures that users can easily share or use the QR code image for their specific needs.

## Installation:

Setting up the QR Code Generator is straightforward. Users can clone the project repository, navigate to the project directory, and install the required dependencies using npm. The following steps need to be followed:  

-> To clone the repository to your local machine: 

```
 git clone https://github.com/santshvm/QR-Code-Generator-.git
 ```

-> Navigate to the project directory: 

```
cd QR-Code-Generator-
```
-> Initialise npm and install the npm modules 

```
npm init 
npm i inquirer qr-image 
```

## Usage:

To generate a QR code, users simply run the application from the terminal. They are prompted to enter the URL they wish to encode in the terminal. The application then processes the input and generates the QR code image, which is saved in the project directory. 

To run the application from the terminal: 

```
node index.js 
```
The application then prompts you to enter a valid URL. After entering the URL, the QR code for the URL entered is stored in a .png file in the project directory. 

### Screenshots: 

<img width="1335" alt="Screenshot 2023-09-23 at 7 10 41 PM" src="https://github.com/santshvm/QR-Code-Generator-/assets/70855191/3d2685cc-5daf-4299-9520-88cea9b52512">

<br> <br> 

![image](https://github.com/santshvm/QR-Code-Generator-/assets/70855191/fe5b5afc-d02f-4b75-bd3c-1aaee32de85b)
<br> <br>



<img width="998" alt="Screenshot 2023-09-23 at 7 10 59 PM" src="https://github.com/santshvm/QR-Code-Generator-/assets/70855191/13f1a6e5-361e-4a1d-8f29-26aaf0a7379c">

<br> <br> 


## Dependencies:

The project relies on two essential Node.js packages:

Inquirer: This package is used for creating user-friendly prompts in the command-line interface, ensuring a smooth and interactive user experience.

qr-image: The qr-image package is responsible for generating the QR code image based on the user's input URL.

Users can install these dependencies conveniently using npm, as outlined in the installation instructions.

## Future Enhancements

While the current version of the application focuses on the backend and functionality, the user experience needs to be enhanced by building a frontend user interface. Here are some of the planned improvements:

- [ ] Create a user-friendly and intuitive web-based interface.
- [ ] Implement responsive design to ensure compatibility across various devices.
- [ ] Enhance the application's visual appeal with modern UI components.
- [ ] Improve accessibility and usability for a wider range of users.




## Conclusion:

The Node.js QR Code Generator project offers a practical solution for generating QR codes from URLs, making it suitable for a variety of applications, including marketing, information sharing, and more. Its user-friendly CLI and straightforward installation process make it accessible to a broad audience of users and contributors.
