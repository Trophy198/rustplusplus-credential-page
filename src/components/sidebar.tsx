import SideMenuRender from "./sideMenuRender"
import menuItems from '../config/menuItems'

const sidebar = () => {
    return (
        <div className="sidebar">
            <SideMenuRender items={menuItems} />
        </div>
    )
}

export default sidebar