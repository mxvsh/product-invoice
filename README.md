# Product Invoice

The application comes with a web based user interface which helps you to generate simple invoice of products you have added to the list.

# Screenshots

| | |
| ------------- | ------------- |
| <img width="1381" alt="image" src="https://user-images.githubusercontent.com/31907722/199143317-4a2ae37e-cadf-4cad-b9d9-7b34aff93a77.png">  | <img width="1381" alt="image" src="https://user-images.githubusercontent.com/31907722/199143444-0b573e96-618c-4236-a522-e76710e60e7d.png">  |


# Roadmap

- [x] Create category
- [x] Calculate product amount
- [ ] Generate invoice
- [ ] Printable invoice (or PDF)
- [ ] Add options inside settings
- [ ] Responsive design
- [ ] Discount option


# Development

In order to work on this project, you must follow these steps.

## Step 1

Clone the repository to your computer using the following command.

`git clone https://github.com/xencodes/product-invoice`

## Step 2

Run the installation command to install all the dependencies required in order to run this application. Since

`pnpm install`

## Step 4

Since we are using Prisma, we must then set up the database, which by default uses a SQLite database. To create database structure, use the following command.

`npx prisma db push`

 ## Step 5
 
 Start the server
 
 `pnpm nx serve`
