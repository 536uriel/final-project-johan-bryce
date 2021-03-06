USE [master]
GO
/****** Object:  Database [rentalCars]    Script Date: 13 יולי 2019 23:12:46 ******/
CREATE DATABASE [rentalCars]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'rentalCars', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\rentalCars.mdf' , SIZE = 73728KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'rentalCars_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\rentalCars_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [rentalCars] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [rentalCars].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [rentalCars] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [rentalCars] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [rentalCars] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [rentalCars] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [rentalCars] SET ARITHABORT OFF 
GO
ALTER DATABASE [rentalCars] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [rentalCars] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [rentalCars] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [rentalCars] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [rentalCars] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [rentalCars] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [rentalCars] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [rentalCars] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [rentalCars] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [rentalCars] SET  DISABLE_BROKER 
GO
ALTER DATABASE [rentalCars] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [rentalCars] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [rentalCars] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [rentalCars] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [rentalCars] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [rentalCars] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [rentalCars] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [rentalCars] SET RECOVERY FULL 
GO
ALTER DATABASE [rentalCars] SET  MULTI_USER 
GO
ALTER DATABASE [rentalCars] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [rentalCars] SET DB_CHAINING OFF 
GO
ALTER DATABASE [rentalCars] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [rentalCars] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [rentalCars] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'rentalCars', N'ON'
GO
ALTER DATABASE [rentalCars] SET QUERY_STORE = OFF
GO
USE [rentalCars]
GO
/****** Object:  Table [dbo].[cars model available]    Script Date: 13 יולי 2019 23:12:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cars model available](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[producer] [nvarchar](50) NOT NULL,
	[model] [nchar](10) NOT NULL,
	[cost per day] [int] NOT NULL,
	[financial penalty] [int] NOT NULL,
	[production year] [date] NOT NULL,
	[gear] [nchar](10) NOT NULL,
	[img] [nvarchar](max) NULL,
	[car number] [int] NOT NULL,
	[banking_adress] [nvarchar](50) NOT NULL,
	[banking_longitued] [int] NOT NULL,
	[banking_name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_cars model] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cars not avalable]    Script Date: 13 יולי 2019 23:12:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cars not avalable](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[producer] [nvarchar](50) NOT NULL,
	[model] [nchar](10) NOT NULL,
	[cost per day] [int] NOT NULL,
	[fainancial penalty] [int] NOT NULL,
	[production year] [date] NOT NULL,
	[gear] [nchar](10) NOT NULL,
	[img] [nvarchar](max) NULL,
	[car number] [int] NOT NULL,
	[banking_adrress] [nvarchar](50) NOT NULL,
	[banking_longitude] [int] NOT NULL,
	[banking_name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_cars not avalable] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[manneger]    Script Date: 13 יולי 2019 23:12:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[manneger](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[userName] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_manneger] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 13 יולי 2019 23:12:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[producer] [nvarchar](50) NOT NULL,
	[model] [nvarchar](50) NOT NULL,
	[cost_per_day] [int] NOT NULL,
	[financial_penalty] [int] NOT NULL,
	[production_year] [date] NOT NULL,
	[gear] [nchar](10) NOT NULL,
	[banking_address] [nvarchar](50) NOT NULL,
	[banking_longitude] [int] NOT NULL,
	[bamking_name] [nchar](10) NOT NULL,
	[userId] [nvarchar](50) NOT NULL,
	[start renting date] [date] NULL,
	[returning date] [date] NULL,
	[actually returning date] [date] NULL,
	[car_number] [int] NULL,
 CONSTRAINT [PK_orders] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 13 יולי 2019 23:12:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fullName] [nvarchar](50) NOT NULL,
	[userId] [int] NOT NULL,
	[userName] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[BDate] [date] NULL,
	[gender] [nchar](10) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[img] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Workers]    Script Date: 13 יולי 2019 23:12:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Workers](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[first name] [nvarchar](50) NOT NULL,
	[last name] [nvarchar](50) NOT NULL,
	[worker id] [int] NOT NULL,
	[user name] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[img] [nvarchar](max) NULL,
 CONSTRAINT [PK_Workers] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [rentalCars] SET  READ_WRITE 
GO
