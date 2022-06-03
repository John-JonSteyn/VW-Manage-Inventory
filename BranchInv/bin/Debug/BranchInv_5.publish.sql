﻿/*
Deployment script for BranchInvDB

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "BranchInvDB"
:setvar DefaultFilePrefix "BranchInvDB"
:setvar DefaultDataPath "C:\Users\johnj\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"
:setvar DefaultLogPath "C:\Users\johnj\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Rename refactoring operation with key 9b4256ce-ebc3-49dd-bd7e-baad13940ad0, fac6edba-71cc-418b-83f7-0c7bbe54a75b is skipped, element [dbo].[FK_Model_ToTable] (SqlForeignKeyConstraint) will not be renamed to [FK_ModelStock_Manufacturer]';


GO
PRINT N'Rename refactoring operation with key 9cb12e46-7362-4905-b825-be541052629a is skipped, element [dbo].[FK_ModelDetails_ToTable] (SqlForeignKeyConstraint) will not be renamed to [FK_ModelDetails_ModelStock]';


GO
PRINT N'Rename refactoring operation with key c4b7ed11-e4d9-46b2-a636-3b8b695c3499, 39f80bb4-3556-4667-ad80-016d37162435 is skipped, element [dbo].[Manufacturer].[Make] (SqlSimpleColumn) will not be renamed to Manufacturer';


GO
PRINT N'Rename refactoring operation with key 9c2bc2ee-4421-432a-a5ed-5fe79c40b96b is skipped, element [dbo].[Model].[Make] (SqlSimpleColumn) will not be renamed to Model';


GO
PRINT N'Rename refactoring operation with key d7aaf95a-f1a9-4c01-93a8-f7dd6ae85b12 is skipped, element [dbo].[ModelStock].[Numstock] (SqlSimpleColumn) will not be renamed to NumStock';


GO
PRINT N'Creating Table [dbo].[ModelDetails]...';


GO
CREATE TABLE [dbo].[ModelDetails] (
    [Model]    TEXT NOT NULL,
    [Features] TEXT NULL,
    [Price]    TEXT NULL,
    PRIMARY KEY CLUSTERED ([Model] ASC)
);


GO
PRINT N'Creating Table [dbo].[ModelList]...';


GO
CREATE TABLE [dbo].[ModelList] (
    [Make]  TEXT NULL,
    [Model] TEXT NOT NULL,
    PRIMARY KEY CLUSTERED ([Model] ASC)
);


GO
PRINT N'Creating Table [dbo].[ModelStock]...';


GO
CREATE TABLE [dbo].[ModelStock] (
    [Model]    TEXT NOT NULL,
    [NumStock] INT  NULL,
    PRIMARY KEY CLUSTERED ([Model] ASC)
);


GO
PRINT N'Creating Foreign Key [dbo].[FK_ModelDetails_ModelList]...';


GO
ALTER TABLE [dbo].[ModelDetails] WITH NOCHECK
    ADD CONSTRAINT [FK_ModelDetails_ModelList] FOREIGN KEY ([Model]) REFERENCES [dbo].[ModelList] ([Model]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_ModelStock_ModelList]...';


GO
ALTER TABLE [dbo].[ModelStock] WITH NOCHECK
    ADD CONSTRAINT [FK_ModelStock_ModelList] FOREIGN KEY ([Model]) REFERENCES [dbo].[ModelList] ([Model]);


GO
-- Refactoring step to update target server with deployed transaction logs

IF OBJECT_ID(N'dbo.__RefactorLog') IS NULL
BEGIN
    CREATE TABLE [dbo].[__RefactorLog] (OperationKey UNIQUEIDENTIFIER NOT NULL PRIMARY KEY)
    EXEC sp_addextendedproperty N'microsoft_database_tools_support', N'refactoring log', N'schema', N'dbo', N'table', N'__RefactorLog'
END
GO
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '9b4256ce-ebc3-49dd-bd7e-baad13940ad0')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('9b4256ce-ebc3-49dd-bd7e-baad13940ad0')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '9cb12e46-7362-4905-b825-be541052629a')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('9cb12e46-7362-4905-b825-be541052629a')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'fac6edba-71cc-418b-83f7-0c7bbe54a75b')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('fac6edba-71cc-418b-83f7-0c7bbe54a75b')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'c4b7ed11-e4d9-46b2-a636-3b8b695c3499')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('c4b7ed11-e4d9-46b2-a636-3b8b695c3499')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '39f80bb4-3556-4667-ad80-016d37162435')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('39f80bb4-3556-4667-ad80-016d37162435')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '9c2bc2ee-4421-432a-a5ed-5fe79c40b96b')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('9c2bc2ee-4421-432a-a5ed-5fe79c40b96b')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'd7aaf95a-f1a9-4c01-93a8-f7dd6ae85b12')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('d7aaf95a-f1a9-4c01-93a8-f7dd6ae85b12')

GO

GO
PRINT N'Checking existing data against newly created constraints';


GO
USE [$(DatabaseName)];


GO
ALTER TABLE [dbo].[ModelDetails] WITH CHECK CHECK CONSTRAINT [FK_ModelDetails_ModelList];

ALTER TABLE [dbo].[ModelStock] WITH CHECK CHECK CONSTRAINT [FK_ModelStock_ModelList];


GO
PRINT N'Update complete.';


GO
