
export const Skills = (props: ISkillsProps) =>{

	return(

		<div className="bg-gray-50 p-6 rounded-xl shadow-md">
		<div className="flex justify-center mb-4">{props.icon}</div>
		<h3 className="text-xl font-semibold mb-4">{props.titulo}</h3>
		<p className="text-gray-600">{props.descripcion}</p>
		</div>

	);
}
