import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import profileReducer from "../state-slice/profile-slice";
import categoryReducer from "../state-slice/category-slice";
import brandReducer from "../state-slice/brand-slice";
import customerReducer from "../state-slice/customer-slice";
import supplierReducer from "../state-slice/supplier-slice";
import expenseReducer from "../state-slice/expense-slice";
import expensetypeReducer from "../state-slice/expensetype-slice";
import productReducer from "../state-slice/product-slice";
import saleReducer from "../state-slice/sale-slice";
import purchaseReducer from "../state-slice/purchase-slice";
import returnReducer from "../state-slice/return-slice"
import dashboardReducer from "../state-slice/dashboard-slice";
import reportReducer from "../state-slice/report-slice";

export default configureStore({
    reducer:{
        settings:settingsReducer,
        dashboard:dashboardReducer,
        profile:profileReducer,
        category:categoryReducer,
        brand:brandReducer,
        customer:customerReducer,
        supplier:supplierReducer,
        expense:expenseReducer,
        expensetype:expensetypeReducer,
        product:productReducer,
        sale:saleReducer,
        purchase:purchaseReducer,
        return:returnReducer,
        report:reportReducer,
    }
})