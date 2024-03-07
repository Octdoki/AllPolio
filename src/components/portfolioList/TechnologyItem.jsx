import { useDispatch } from "react-redux";



const TechnologyItem = ({item}) => {
    const dispatch = useDispatch()
    
    return (
        <li className={item.isOn && 'on'}>
            {item.technology}
        </li>
    );
};

export default TechnologyItem;