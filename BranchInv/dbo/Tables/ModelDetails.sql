CREATE TABLE [dbo].[ModelDetails]
(
    [Model] TEXT NOT NULL, 
    [Features] TEXT NULL, 
    [Price] TEXT NULL, 
    CONSTRAINT [FK_ModelDetails_ModelList] FOREIGN KEY ([Model]) REFERENCES [ModelList]([Model]), 
    PRIMARY KEY ([Model])
)
