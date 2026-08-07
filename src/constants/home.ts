export const HERO_CONTENT = {
	eyebrow: "Envíos dentro de México",

	title: "Cotiza tus envíos nacionales en México",

	description:
		"Compara opciones de paquetería, genera tus guías y administra tus paquetes desde un solo lugar.",

	primaryCta: "Cotizar mi envío",

	secondaryCta: "Cómo funciona",

	benefits: [
		"Compara diferentes opciones",
		"Genera guías en línea",
		"Rastrea tus paquetes",
	],
} as const;

export const HOW_IT_WORKS_CONTENT = {
	eyebrow: "Proceso simple",

	title: "Realiza tu envío en tres pasos",

	description:
		"Cotiza documentos y paquetes dentro de México. Captura la información del envío, compara las opciones disponibles y genera tu guía en pocos minutos.",

	steps: [
		{
			number: "01",
			icon: "quote",
			title: "Cotiza tu paquete",
			description:
				"Ingresa los códigos postales de origen y destino, además del peso y las dimensiones de tu paquete.",
		},
		{
			number: "02",
			icon: "compare",
			title: "Compara opciones",
			description:
				"Consulta los servicios disponibles, tiempos estimados y alternativas para realizar tu envío nacional.",
		},
		{
			number: "03",
			icon: "guide",
			title: "Genera tu guía",
			description:
				"Selecciona una opción, completa tu compra, descarga la guía y prepara el paquete para enviarlo.",
		},
	],

	summary:
		"Utiliza una misma plataforma para administrar envíos personales, empresariales o de comercio electrónico.",

	highlights: [
		"Documentos y paquetes",
		"Cobertura nacional",
		"Seguimiento en línea",
	],
} as const;
export const SOLUTIONS_CONTENT = {
	eyebrow: "Soluciones complementarias",

	title: "Más herramientas para tu operación",

	description:
		"Complementa tus envíos nacionales con soluciones para administrar pagos, procesos logísticos, inventario y preparación de pedidos.",

	items: [
		{
			id: "pagos-fiables",
			name: "Pagos Fiables",
			icon: "payments",
			description:
				"Centraliza recargas, movimientos, comprobantes y procesos de facturación desde un mismo lugar.",
			features: [
				"Control de movimientos",
				"Comprobantes",
			],
			href: "https://www.pagosfiable.com/",
			linkLabel: "Conocer Pagos Fiables",
		},
		{
			id: "drevfill",
			name: "DrevFill",
			icon: "inventory",
			description:
				"Sincroniza inventario, prepara pedidos y consulta el seguimiento operativo de tu fulfillment.",
			features: [
				"Inventario sincronizado",
				"Preparación de pedidos",
			],
			href: "https://drevfill.com/",
			linkLabel: "Conocer DrevFill",
		},
		{
			id: "drevsto",
			name: "Partners",
			icon: "operations",
			description:
				"Complementa tu operación con herramientas para organizar y dar seguimiento a tus procesos logísticos.",
			features: [
				"Control operativo",
				"Gestión logística",
			],
			href: "https://partners.drenvio.com/",
			linkLabel: "Conocer Partners",
		},
	],
} as const;

export const FAQ_CONTENT = {
	eyebrow: "Resuelve tus dudas",

	title: "Preguntas frecuentes sobre envíos nacionales",

	description:
		"Consulta lo necesario para cotizar, preparar y dar seguimiento a tus paquetes dentro de México.",

	items: [
		{
			id: "cotizar-envio",
			question: "¿Cómo puedo cotizar un envío nacional?",
			answer:
				"Ingresa el código postal de origen y destino, el peso, las dimensiones y el tipo de paquete. Después podrás consultar y comparar las opciones disponibles para realizar tu envío.",
			link: "quote",
			linkLabel: "Cotizar un envío",
		},
		{
			id: "datos-necesarios",
			question: "¿Qué información necesito para generar una guía?",
			answer:
				"Necesitas los datos del remitente y destinatario, los códigos postales, las medidas del paquete, su peso real y una descripción correcta del contenido que vas a enviar.",
			link: "nationalShipping",
			linkLabel: "Conocer más sobre envíos nacionales",
		},
		{
			id: "costo-envio",
			question: "¿Cómo se calcula el costo de un envío?",
			answer:
				"El precio puede variar según el origen, destino, peso real, peso volumétrico, dimensiones, cobertura y tipo de servicio. Por eso es importante capturar las medidas correctas antes de cotizar.",
			link: "quote",
			linkLabel: "Calcular el costo de mi envío",
		},
		{
			id: "rastrear-paquete",
			question: "¿Cómo puedo rastrear mi paquete?",
			answer:
				"Utiliza el número de guía proporcionado al generar el envío. Con él puedes consultar el estatus disponible y revisar si el paquete está en tránsito, en proceso de entrega o entregado.",
			link: "tracking",
			linkLabel: "Rastrear un paquete",
		},
		{
			id: "envios-negocio",
			question: "¿Puedo administrar los envíos de mi negocio?",
			answer:
				"Sí. Puedes centralizar la cotización, generación de guías y seguimiento de múltiples envíos. También existen herramientas para integrar tiendas en línea y organizar pedidos.",
			link: "platform",
			linkLabel: "Conocer la plataforma de envíos",
			secondaryLink: "integrations",
			secondaryLinkLabel: "Ver integraciones",
		},
	],
} as const;