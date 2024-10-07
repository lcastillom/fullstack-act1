USE hoteles;

INSERT INTO hoteles.destinos (nombre) VALUES
	('Creel'),
	('Guachochi'),
	('Basaseachi');
    
SELECT * FROM hoteles.destinos;

INSERT INTO hoteles.hoteles (destinoId, nombre, caracteristicas, precioNocheMin, precioNocheMax, contacto) VALUES 
	(1, 'Hotel Plaza Creel', 'Habitaciones cómodas, decoración rústica, restaurante, acceso a internet, y cercanía a la plaza principal.', 800, 1200, '52 635 565 0147'),
	(1, 'Hotel Best Western The Lodge at Creel', 'Estilo rústico, habitaciones bien equipadas, servicios de spa, restaurante, y opciones de excursiones.', 1200, 2000, '52 635 565 0166'),
	(1, 'Hotel San Isidro', 'Ambientes acogedores, buena atención al cliente, restaurante, y acceso a actividades al aire libre.', 700, 1100, '52 635 565 0180'),
	(1, 'Hotel Cabañas del Lago', 'Cabañas privadas, vistas al lago, cocina equipada en algunas cabañas.', 1000, 1500, '52 635 565 0170'),
	(1, 'Hotel Sierra Azul', 'Habitaciones amplias, diseño tradicional, restaurante y fácil acceso a atracciones turísticas.', 800, 1400, '52 635 565 0111'),
	(1, 'La Casa de la Abuela', 'Estilo hogareño, atención personalizada, desayunos incluidos.', 600, 1000, '52 635 565 0160'),
	(1, 'Cabañas Valle de los Monjes', 'Cabañas en un entorno natural, áreas de fogata, ideales para grupos.', 1200, 2000, '52 635 565 0130'),
	(2, 'Hotel Misión Guachochi', 'Habitaciones cómodas, restaurante, servicio de Wi-Fi, y cercanía a atracciones turísticas.', 900, 1500, '52 635 567 1000'),
	(2, 'Hotel Sierra Tarahumara', 'Estilo rústico, habitaciones bien equipadas, servicio de restaurante y vistas panorámicas.', 800, 1300, '52 635 567 0540'),
	(2, 'Cabañas El Muro', 'Cabañas rústicas, ideal para familias y grupos, cocina equipada y áreas de fogata.', 1000, 1800, '52 635 567 1030'),
	(2, 'Hotel El Descanso', 'Habitaciones sencillas, buen servicio, restaurante y cercanía al centro de Guachochi.', 600, 1000, '52 635 567 1005'),
	(2, 'Hotel Villa de Guachochi', 'Habitaciones confortables, restaurante, y acceso a actividades al aire libre.', 700, 1200, '52 635 567 1010'),
	(2, 'Cabañas Las Lajitas', 'Cabañas en un entorno natural, ideales para desconectar, y áreas de recreación.', 1200, 2000, '52 635 567 1020'),
	(2, 'Hotel La Cabaña', 'Cabañas rústicas, ambiente acogedor, y cercanía a la naturaleza.', 800, 1400, '52 635 567 1040'),
	(3, 'Hotel Basaseachic', 'Habitaciones cómodas, vistas a la cascada, restaurante, acceso a senderos y actividades al aire libre.', 1200, 2000, '52 635 567 0551'),
	(3, 'Cabañas Basaseachic', 'Cabañas rústicas, cocina equipada, ambiente natural, ideal para familias y grupos.', 1000, 1800, '52 635 567 1003'),
	(3, 'Hotel Mirador', 'Habitaciones sencillas, restaurante, buenas vistas, y cercanía a la cascada.', 800, 1300, '52 635 567 0552'),
	(3, 'Hotel La Cascada', 'Habitaciones cómodas, restaurante, y cercanía a senderos de ecoturismo.', 700, 1200, '52 635 567 0590'),
	(3, 'Cabañas del Río', 'Cabañas en la naturaleza, ideales para desconectar, áreas de fogata y recreación.', 1200, 2000, '52 635 567 1001'),
	(3, 'Hotel Ecoturismo Basaseachic', 'Alojamiento rústico, enfoque en la naturaleza y ecoturismo, actividades al aire libre.', 800, 1500, '52 635 567 0511');

SELECT * FROM hoteles.hoteles;