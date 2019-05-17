create database Worktracker
use Worktracker
 
create table WorkOut_Collectionsss(
WorkOut_Title varchar(128),
WorkOut_Note varchar(256),
Calories_Burn_Per_Minute float,
Category_id int foreign key references WorkOut_Categories(Category_id), 
WorkOut_id int  identity primary key
) 

create table WorkOut_Activess(
id int identity primary key,
WorkOut_id int foreign key references WorkOut_Collectionsss(WorkOut_id),
Start_time Time,
Starts_Date date,
End_Date date,
End_Time time,
Comment varchar(64),
Statuss bit
) 
create table workout_categories(
category_id int identity primary key,
category_name varchar(64)
)