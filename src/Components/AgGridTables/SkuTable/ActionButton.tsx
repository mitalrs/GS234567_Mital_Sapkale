import { Trash2 } from 'lucide-react';


export default () => {
    return <button onClick={() => window.alert('Delete (this button is only for checking the action purpose)')}>
        <Trash2 className="missionIcon"/>
    </button>;
};