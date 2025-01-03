import mongoose, { Schema, Document } from "mongoose";
import { ISanPham } from "../interface/ModelInterface";

const SanPhamSchema: Schema = new Schema(
    {
        tenSP: {
            type: String,
            required: true
        },
        giaBan: {
            type: Number,
            required: true
        },
        giaNhap: {
            type: Number,
            required: true
        },
        soLuong: {
            type: Number,
            required: true
        },
        trongLuong: {
            type: Number,
            required: true
        },
        kichThuoc: {
            dai: {
                type: Number,
                required: true
            },
            rong: {
                type: Number,
                required: true
            },
            cao: {
                type: Number,
                required: true
            },
        },
        khuyenMai: {
            type: String,
        },
        moTa: {
            type: String
        },
        danhMucId: {
            type: Schema.Types.ObjectId,
            ref: "DanhMuc",
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<ISanPham>("SanPham", SanPhamSchema)