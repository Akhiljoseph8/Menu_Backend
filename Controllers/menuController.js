
const Menu = require('../Model/menuModel')

//Menu adding to database
exports.addMenu = async (req, res) => {
    try {
      const { menuName, description, items } = req.body;
  
      const newMenu = new Menu({ menuName, description, items });
      await newMenu.save();
  
      res.status(201).json({ message: "Menu added successfully", menu: newMenu });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //fetching all items from database
  exports.getMenu = async (req, res) => {
    try {
      const menus = await Menu.find(); 
      const formattedMenus = menus.map((menu) => ({
        menuName: menu.menuName,
        description: menu.description,
        items: [
          {
            category: menu.menuName, 
            items: menu.items.map((item) => ({
              name: item.itemName,
              description: item.description,
              price: `$${item.price}`, 
            })),
          },
        ],
      }));
  
      res.status(200).json(formattedMenus);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
