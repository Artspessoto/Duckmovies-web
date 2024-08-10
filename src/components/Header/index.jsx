import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Profile, StyledMenu } from "./styles";
import { BrandTitle } from "../BrandTitle";
import { Input } from "../Input";
import avatarPlaceholder from "../../assets/images/avatarProfile.svg";

import MenuItem from "@mui/material/MenuItem";
import { FiUser, FiLogOut } from "react-icons/fi";

import { useAuth } from "../../context/AuthContext/useAuth";
import { api } from "../../services/api";

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleClose();
  }

  const handleLogoutClick = () => {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <Profile>
        <Link to="/">
          <BrandTitle
            title="Duckmovies"
            fontSize="2.4rem"
            logoHeight="4rem"
            logoWidth="4rem"
          />
        </Link>
        <Input placeholder="Pesquisar pelo título" />
        <div>
          <strong>{user.name}</strong>
          <img
            src={avatarUrl}
            alt="Foto do usuário"
            onClick={handleClick}
          />
          <StyledMenu
            id="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleProfileClick}><FiUser /> Perfil</MenuItem>
            <MenuItem onClick={handleLogoutClick}><FiLogOut /> Sair</MenuItem>
          </StyledMenu>
        </div>
      </Profile>
    </Container>
  );
}
