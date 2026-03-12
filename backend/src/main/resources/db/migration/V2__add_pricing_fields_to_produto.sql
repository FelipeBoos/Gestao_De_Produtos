ALTER TABLE produtos
ADD COLUMN demanda_base INTEGER;

ALTER TABLE produtos
ADD COLUMN fator_elasticidade DECIMAL(5,2);