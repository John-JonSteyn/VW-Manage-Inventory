CREATE TABLE [dbo].[ModelStock]
(
    [Model] TEXT NOT NULL, 
    [NumStock] INT NULL, 
    CONSTRAINT [FK_ModelStock_ModelList] FOREIGN KEY ([Model]) REFERENCES [ModelList]([Model]), 
    PRIMARY KEY ([Model])
)
