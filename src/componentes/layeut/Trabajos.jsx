import "./Trabajos.css";

import Modal from "../Modal";
import trabajos from "../data/trabajos";
import { useState } from "react";

const Trabajos = () => {
	const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
	const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
	const [estadoModal, setEstadoModal] = useState(false);
	const [trabajoSelecionado, setTrabajoSelecionado] = useState(trabajos[0]);

	const handleChange = (e) => {
		const categoria = e.target.id;
		setCategoriaSelecionada(categoria);

		if (categoria === "todos") {
			setTrabajosFiltrados(trabajos);
		} else {
			const nuevosTrabajos = trabajos.filter((trabajo) => {
				if (trabajo.categoria === categoria) {
					return true;
				}
			});
			setTrabajosFiltrados(nuevosTrabajos);
		}
	};

	const openModal = (e, id) => {
		e.preventDefault();
		setEstadoModal(true);

		const trabajo = trabajos.find((trabajo) => {
			if (trabajo.id === id) {
				return true;
			}
		});

		setTrabajoSelecionado(trabajo);
	};

	const closeModal = () => {
		setEstadoModal(false);
	};

	return (
		<>
			<section className="trabajos" id="trabajos">
				<div className="encabezado">
					<h3 className="titulo">Mis Trabajos</h3>
					<p className="subtitulo">
						Me encanta usar mi creatividad para desarrollar
						proyectos unicos de alto impacto.
					</p>
				</div>
				<div className="filtros">
					<label htmlFor="todos">
						<input
							type="radio"
							name="categoria"
							id="todos"
							onChange={handleChange}
							checked={categoriaSelecionada === "todos"}
						/>
						<span className="opcion">Todos</span>
					</label>

					<label htmlFor="branding-e-identidad-visual">
						<input
							type="radio"
							name="categoria"
							id="branding-e-identidad-visual"
							onChange={handleChange}
							checked={
								categoriaSelecionada ===
								"branding-e-identidad-visual"
							}
						/>
						<span className="opcion">
							Branding e Identidad Visual
						</span>
					</label>

					<label
						htmlFor="creatividad-visual-y-conceptualización"
						onChange={handleChange}
						checked={
							categoriaSelecionada ===
							"creatividad-visual-y-conceptualización"
						}
					>
						<input
							type="radio"
							name="categoria"
							id="creatividad-visual-y-conceptualización"
						/>
						<span className="opcion">
							{" "}
							Creatividad Visual y Conceptualización
						</span>
					</label>

					<label htmlFor="ux-y-diseño-editorial">
						<input
							type="radio"
							name="categoria"
							id="ux-y-diseño-editorial"
							onChange={handleChange}
							checked={
								categoriaSelecionada === "ux-y-diseño-editorial"
							}
						/>
						<span className="opcion">UX y Diseño Editorial</span>
					</label>

					<label htmlFor="percepcion-visual">
						<input
							type="radio"
							name="categoria"
							id="percepcion-visual"
							onChange={handleChange}
							checked={categoriaSelecionada === "percepcion-visual"}
						/>
						<span className="opcion">Percepción Visual</span>
					</label>
				</div>
				<div className="grid">
					{trabajosFiltrados.map((trabajo, index) => {
						return (
							<div className="trabajo" key={trabajo.id}>
								<a
									href="#"
									className="thumb"
									onClick={(e) => openModal(e, trabajo.id)}
								>
									{(trabajo.type !== "video") ? (
										<img
											loading="lazy"
											src={trabajo.thumb.url}
											alt={trabajo.thumb.alt}
										/>
									) : (
										<video
                                            src={trabajo.thumb.url}
                                            controls
                                            autoPlay
                                            loop
                                            muted
                                            style={{ width: '100%', borderRadius: '12px' }}
                                        />
									)}
								</a>
								<div className="info">
									<div className="textos">
										<a
											href="#"
											className="nombre"
											onClick={(e) =>
												openModal(e, trabajo.id)
											}
										>
											{trabajo.info.nombre}
										</a>
										<p className="categoria">
											{trabajo.info.categoria}
										</p>
									</div>
									<a
										href="#"
										className="btn-ir"
										onClick={(e) =>
											openModal(e, trabajo.id)
										}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
										</svg>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{estadoModal && (
				<Modal closeModal={closeModal} trabajo={trabajoSelecionado} />
			)}
		</>
	);
};

export default Trabajos;
