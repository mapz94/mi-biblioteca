package com.biblioteca.springboot.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.biblioteca.springboot.backend.models.dao.IUserDao;
import com.biblioteca.springboot.backend.models.entity.User;


@Service
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private IUserDao userDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return (List<User>) userDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return userDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public User save(User user) {
		// TODO Auto-generated method stub
		return userDao.save(user);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		// TODO Auto-generated method stub
		userDao.deleteById(id);
	}
	
}
